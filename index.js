// Import external libraries
import inquirer from 'inquirer'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

// Import internal libraries
import { Manager } from './lib/Manager.js'
import { Engineer } from './lib/Engineer.js'
import { Intern } from './lib/Intern.js'
import { render } from './src/page-template.js'
import { managerQuestions, engineerQuestions, internQuestions } from './utils/questions.js'
import { log } from 'console'

// Visual breakpoint
const breakpoint = () => console.log(`-----------------------------------`);

// Replicate the functionality of __dirname for ES6 Module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Initialise file path and file name for eventual HTML file
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

/* Ask the user a series of questions to gather data on all team members,
   create new employee object using each hash and push into array, then 
   pass array into render function to create HTML webpage for team
*/

async function init() {
  // Initialise array to store team member's and value to break loop
  const team = []
  let addMore = true

  // Visual breakpoint
  console.log(`--------------TeamGen--------------`);

  // Prompt user to enter details for Team Manager 
  let inputs = await inquirer.prompt(managerQuestions) 

  // Initialise new Manager and store in team array
  let employee = new Manager(inputs.name, inputs.id, inputs.email, inputs.office)
  team.push(employee)
  breakpoint()
  
  // Prompt user to add remaining employees
  while (addMore) {
    const { option } = await inquirer.prompt([
      {
        name: "option",
        message: "Choose an option: ",
        type: "list",
        choices: [
          {name: "Add an engineer", value: "engineer", short: "Engineer selected"},
          {name: "Add an intern", value: "intern", short: "Intern selected"},
          {name: "Finish building the team", value: "finish", short: "Team finished"}
        ]
      } 
    ])

    switch(option) {
      case "finish":
        // User is finished with inputs, break out of white loop
        addMore = false
        break
      case "engineer":
        // Prompt user to enter details for Engineer
        inputs = await inquirer.prompt(engineerQuestions)

        // Initialise new Engineer and store in team array
        employee = new Engineer(inputs.name, inputs.id, inputs.email, inputs.github)
        team.push(employee)
        breakpoint()
        break
      case "intern":
        // Prompt user to enter details for Intern
        inputs = await inquirer.prompt(internQuestions)

        // Initialise new Intern and store in team array
        employee = new Intern(inputs.name, inputs.id, inputs.email, inputs.school)
        team.push(employee)
        breakpoint()
        break
    }
  }

  // Create HTML document using team array
  const teamPageHtml = render(team)

  // Create file
  fs.writeFile(outputPath, teamPageHtml, (err) => {
    if (err) throw new Error(err)
    else console.log('File saved!')
  })
}

init()

