// Packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer')
const genReadme = require('./generateREADME.md')


inquirer
    .prompt([
        {
            message: "Project title?",
            input: title
        },
        {
            message: "Short paragraph description of your project:",
            input: description
        },
        {
            message: "Command needed to install dependencies:",
            input: dependency
        },
        {
            message: "Any additional installation instructions?",
            input: install
        },
        {
            message: "Technologies used:",
            input: tech
        },
        {
            message: "You will now be asked for your contact information.",
        },
        {
            message: "Author Name:",
            input: author
        },
        {
            message: "GitHub:",
            input: git
        },
        {
            message: "Email:",
            input: email
        },
        {
            message: "Linkedin:",
            input: linkedin
        },
        {
            message: "What kind of license should your project have?",
            input: badge
        }
    ])

    .then((response) => {
    
        fs.writeFile('README.md', generateMD); 
            err ? console.error(err) : console.log('Success!')
        } );
    
//


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
