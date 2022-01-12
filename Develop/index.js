// Packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const choices = require('inquirer/lib/objects/choices');
// const { listenerCount } = require('process');
const markdown = require('./assets/generateREADME.js')


const questions = [
        {
            name: "badge",
            message: "What kind of license should your project have?",
            type: "list",
            choices: ["MIT", "IBM"],
        },
        {
            name: "title",
            message: "Project title?",
            type: "input",
        },
        {
            name: "description",
            message: "Short paragraph description of your project:",
            type: "input",
        },
        {
            name: "dependency",
            message: "Command needed to install dependencies:",
            type: "input",
        },
        {
            name: "install",
            message: "Any additional installation instructions?",
            type: "input",
        },
        {
            name: "technology",
            message: "Technologies used:",
            type: "input",
        },
        {   name: "msg1",
            message: "You will now be asked for your contact information.",
        },
        {
            name: "author",
            message: "Author Name:",
            type: "input",
        },
        {
            name: "git",
            message: "GitHub:",
            type: "input",
        },
        {
            name: "email",
            message: "Email:",
            type: "input",
        },
        {
            name: "linkedin",
            message: "Linkedin:",
            type: "input",
        },
];
    
//

// function writeToFile('README.md', answers) {
//     fs.writeFile

// }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then (answers =>{
            const myMarkdown = markdown(answers); 
        })
}

// Function call to initialize app
init();
