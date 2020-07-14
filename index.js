const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs")

const writeFileAsync = util.promisify(fs.writeFile);

function getInput() {
    inquirer.prompt([
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
            name: "testinstructions"
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
    ])
        .then(function (answers) {
            console.log(answers)
        })
}

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    getInput();
}

// function call to initialize program
init();
