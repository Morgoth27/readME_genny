// Packages needed for this application

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const choices = require('inquirer/lib/objects/choices');
const generateMD = require('./assets/generateREADME.js');
// const { listenerCount } = require('process');



const questions = [

        {
            name: "badge",
            message: "What kind of license should your project have?",
            type: "list",
            choices: ["MIT", "IBM", "MPL 2.0", "ODC BY", "PDDL", "ODbL", "WTFPL", "SIL", "ISC", "None"],
        },
        {
            message: "Project title:",
            type: "input",
            name: "title",
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
            message: "Please provide installation instructions:",
            type: "input",
        },
        {
            name: "technology",
            message: "Technologies used:",
            type: "input",
        },
        {   name: "msg1",
            message: "You will now be asked for your contact information. Press Y to continue.",
            type: "confirm",
        },
        {
            name: "author",
            message: "Author Name:",
            type: "input",
        },
        {
            name: "git",
            message: "GitHub URL starting with WWW:",
            type: "input",
        },
        {
            name: "email",
            message: "Email:",
            type: "input",
        },
        {
            name: "linkedin",
            message: "Linkedin URL starting with WWW:",
            type: "input",
        },
];
    
function writeToFile (fileName, answers) {
    // return fs.writeFileSync(path.join(process.cwd(), fileName), answers);
    return fs.writeFileSync(path.join(fileName), answers);
};


// function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            writeToFile(__dirname.replace('Develop', 'output/') + 'README.md', generateMD({...answers}))
            // const myMarkdown = markdown(answers); 
        })
}

// Function call to initialize app
init();
