// Answer validation functions
const nameValidation = (answer) => {
  // Validate answer is between 1 and 128 standard characters
  // Regexp expression credited to top answer at https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
  const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
  if (regex.test(answer)) return true
  return 'Please enter a name using between 1 - 128 alpha chars'
}

const numberValidation = (answer) => {
  // Validate answer is a number
  if (!isNaN(answer)) return true
  return 'Please enter a valid number'
}

const emailValidation = (answer) => {
  // Validate answer is an email
  // Regexp expression credited to top answer at https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (regex.test(answer)) return true
  return 'Please enter a valid email'
}

// Team Manager questions
export const managerQuestions = [
  {
    name: "name",
    message: "Enter the Team Manager's name:",
    type: "input",
    validate: nameValidation
  },
  {
    name: "id",
    message: "Enter the Team Manager's employee ID:",
    type: "input",
    validate: numberValidation
  },
  {
    name: "email",
    message: "Enter the Team Manager's email address:",
    type: "input",
    validate: emailValidation
  },
  {
    name: "office",
    message: "Enter the Team Manager's office number:",
    type: "input",
    validate: numberValidation
  }
]

// Engineer questions
export const engineerQuestions = [
  {
    name: "name",
    message: "Enter the Engineer's name:",
    type: "input",
    validate: nameValidation
  },
  {
    name: "id",
    message: "Enter the Engineer's employee ID:",
    type: "input",
    validate: numberValidation
  },
  {
    name: "email",
    message: "Enter the Engineer's email address:",
    type: "input",
    validate: emailValidation
  },
  {
    name: "github",
    message: "Enter the Engineer's Github username:",
    type: "input"
  }
]

// Intern questions
export const internQuestions = [
  {
    name: "name",
    message: "Enter the Intern's name:",
    type: "input",
    validate: nameValidation
  },
  {
    name: "id",
    message: "Enter the Intern's employee ID:",
    type: "input",
    validate: numberValidation
  },
  {
    name: "email",
    message: "Enter the Intern's email address:",
    type: "input",
    validate: emailValidation
  },
  {
    name: "school",
    message: "Enter the Intern's school:",
    type: "input"
  }
]