import Manager from '../lib/Manager'
import Engineer from '../lib/Engineer'
import Intern from '../lib/Intern'
import inquirer from 'inquirer'
import path from 'path'
import fs from 'fs'

// Replicate the functionality of __dirname for ES6 Module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

import render from './src/page-template.js'


// TODO: Write Code to gather information about the development team members, and render the HTML file.

