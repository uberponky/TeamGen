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

// Replicate the functionality of __dirname for ES6 Module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");



// TODO: Write Code to gather information about the development team members, and render the HTML file.

