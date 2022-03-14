// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');


// // TODO: Create a function to initialize app
function init() {

// TODO: Create an array of questions for user input

const questions = [

    {
        type:'input',
        name:'title',
        message:'What is the Title of your Repo:'
    },
    {
        type:'input',
        name:'description',
        message:'Give a description of your README file:'
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps to install your project:'
    },
    {
        type:'input',
        name:'usage',
        message:'Insert usage infromation:'
    },
    {
        type:'input',
        name:'contribution',
        message:'Contribution Guidelines:'
    },
    {
        type:'input',
        name:'test',
        message:'Insert test instructions'
    },
    {
        type:'checkbox',
        choices: ['MIT','GNU','ISC'],
        name:'license',
        message:'What license do you have:'
    },
    {
        type:'input',
        name:'github',
        message:'Insert your Github name:'
    },
    {
        type:'input',
        name:'contact',
        message:'Insert your email address:'
    }
]

// // TODO: Create a function to write README file
inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);

        fs.writeFile('README.md', generateMarkdown(answers), (err) => {
            if (err) return err;
            
            console.log('Done!');
        });
    })

}


// // // Function call to initialize app
init();
