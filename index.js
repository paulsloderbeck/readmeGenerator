const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs")

const writeFileAsync = util.promisify(fs.writeFile);

function getInput() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your project title?",
            name: "title"
        },
        {
            type: "input",
            message: "Please enter a description of your project",
            name: "description"
        },
        {
            type: "input",
            message: "Please enter installation instructions",
            name: "install"
        },
        {
            type: "input",
            message: "Please enter usage information",
            name: "usage"
        },
        {
            type: "input",
            message: "Please enter contribution guidelines",
            name: "guidelines"
        },
        {
            type: "input",
            message: "Please enter test instructions",
            name: "test"
        },
        {
            type: "list",
            message: "Please select a license",
            name: "license",
            choices: [
                "MIT",
                "GPL",
                "Apache",
            ]
        },
        {
            type: "input",
            message: "What is your github username?",
            name: "github"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        }
    ]);
}

function generateMarkdown(answers) {
    return `
# ${answers.title}
## Description
${answers.description}
## Installation
${answers.install}
## Usage
${answers.usage}
## Contributing
${answers.guidelines}
## Tests
${answers.test}
## License
This application features a ${answers.license} license.
## Questions
Please find me on github at <https://github.com/${answers.github}>
You can also contact me directly at ${answers.email} with any additional questions.
`
}
// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

getInput()
    .then(function (answers) {
        const markdown = generateMarkdown(answers);
        return writeFileAsync("readme.md", markdown);
    })
    .then(function () {
        console.log("Succesfully created readme.md");
    })
    .catch(function (err) {
        console.log(err);
    })
