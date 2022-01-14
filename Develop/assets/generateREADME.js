


//TODO: Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
function renderLicenseBadge(license) {

    if(license !== 'None') {    
        return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    if(license !== 'None') {
        return `* [License](#license)`
    }

    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}


const generateMD = (answers =>{
    return `# ${answers.title}

${renderLicenseBadge(answers.badge)}

## Table of Contents

* [Description](#description)
* [Installation](#installation-and-dependencies)
* [Dependencies](#installation-and-dependencies)
* [Technologies Used](#technologies-used)
* [Author and Contact](#about-the-author)  

## Description
-------------

**${answers.title}**

${answers.description}  


## Installation and Dependencies
-----------------------------

${answers.install}

${answers.dependency}  


## Technologies Used
-------------------

${answers.technology}  


## About the Author
------------------

**${answers.author}**

* Email: [${answers.email}](mailto:${answers.email})

* [GitHub ](http://${answers.git})

* [LinkedIn ](http://${answers.linkedin})  

## License
----------
${renderLicenseLink(answers.badge)}
`})

module.exports = generateMD;