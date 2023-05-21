const inquirer = require('inquirer')
const fs = require('fs')

const { Circle, Triangle, Square} = require('./lib/shapes.js')

function svgPrompt() {
    return inquirer
        .prompt([
            {
                type: 'list',
                message: 'What shape would you like?',
                name: 'shape',
                choices: ['Circle', 'Square', 'Triangle'],
            },
            {
                type: 'input',
                message: 'What color would you like the background?',
                name: 'backgroundColor',
                validate: function(input){
                    if (input === '') {
                        return `\x1b[31mPlease enter a color\x1b[0m` 
                    }
                    return true
                }
            },
            {
                type: 'input',
                message: 'Enter your text, 3 characters max',
                name:'svgText',
                validate: function(input){
                    if (input.length > 3) {
                        return `\x1b[31mInput must be 3 characters or less\x1b[0m`
                    }
                    return true
                }
                
            },
            {
                type: 'input',
                message: 'What color would you like the text?',
                name: 'textColor',
                validate: function(input){
                    if (input === '') {
                        return `\x1b[31mPlease enter a color\x1b[0m`
                    }
                    return true
                }
            },

        ]).then((data) => {
            const ShapeClass = {
                'Triangle': Triangle,
                'Circle': Circle,
                'Square': Square
            }[data.shape];
        
            const shape = new ShapeClass();
            shape.backgroundColor = data.backgroundColor;
            shape.svgText = data.svgText;
            shape.textColor = data.textColor;
        
            fs.writeFile(`${data.shape.toLowerCase()}.svg`, shape.render(), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(`\x1b[32mGenerated ${data.shape.toLowerCase()}.svg\x1b[0m`);
                }
            });
        })
        
}

// Function call for the above function
svgPrompt()