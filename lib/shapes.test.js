const {Circle, Square, Triangle} = require("./shapes")

describe('Circle', () => {
    test('Correct', () => {
        const circle = new Circle();
        circle.textColor = 'white'
        circle.svgText = 'ABC'
        circle.backgroundColor = 'red'
        
        expect(circle.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="400px" height="400px">
        <circle cs="200" cy="200" r="100" height="100%" width="100%" fill="red">
        <text x="200" y="200" font-size="60" text-anchor="middle" fill="white">ABC</text>
        </svg>`)
    })
})

describe('Square', () => {
    test('Correct', () => {
        const square = new Square();
        square.textColor = 'blue'
        square.svgText = '123'
        square.backgroundColor = 'yellow'
        
        expect(square.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="400px" height="400px">
        <rect x="200" y="200" height="100%" width="100%" fill="yellow">
        <text x="200" y="200" font-size="60" text-anchor="middle" fill="blue">123</text>
        </svg>`)
    })
})

describe('Triangle', () => {
    test('Correct', () => {
        const triangle = new Triangle();
        triangle.textColor = 'purple'
        triangle.svgText = 'XYZ'
        triangle.backgroundColor = 'green'
        
        expect(triangle.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="400px" height="400px">
        <polygon points+"200,50 100,250 350,250" height="100%" width="100%" fill="green">
        <text x="200" y="200" font-size="60" text-anchor="middle" fill="purple">XYZ</text>
        </svg>`)
    })
})