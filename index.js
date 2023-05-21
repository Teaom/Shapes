const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes");

function shapeFactory(shape, data){
    switch(shape) {
        case 'Circle':
            return new Circle(data);
        case 'Square':
            return new Square(data);
        case 'Triangle':
            return new Triangle(data);    
    }
}

async function svgPrompt() {
    const questions = [
    {    
        type: 'list',
        message: 'What shape would you like',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
    },      
    {
        type: 'input',
        message: 'What color would you like for the background',
        name: 'backgroundColor',
        validate: function(input) {
            return input ? true : `\x1b[31mPlease enter a color\x1b[Om`;
        },
    },
    {
        type: 'input',
        message: 'Enter your text (note: you can enter up to three characters):',
        name: 'svgText',
        validate: function(input) {
            return input.length <= 3 ? true : `\x1b[31mInput must be 3 characters or less\x1b[0m`;
        },
    },
    {
        type: 'input',
        message: 'What color would you like the text to be (you can use a color name or hexadecimal code)?',
        name: 'textColor',
        validate: function(input) {
        return input ? true : `\x1b[31mPlease enter a color\x1b[0m`;
      },
    },    
    ];

    const data = await inquirer.prompt(questions);
    const shape = shapeFactory(data.shape, data);
  
    try {
      await fs.writeFile(`${data.shape.toLowerCase()}.svg`, shape.render());
      console.log(`\x1b[32mGenerated ${data.shape.toLowerCase()}.svg\x1b[0m`);
    } catch (err) {
      console.error(err);
    }
}

svgPrompt();