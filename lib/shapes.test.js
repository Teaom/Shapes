const { Circle, Triangle, Square} = require('./shapes.js')

describe('Render Circle', () => {
    it('Parameters pass', () => {
        const circle = new Circle()
        circle.backgroundColor = 'blue'
        circle.svgText = 'ABC'
        circle.textColor = 'white'

        expect(circle.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="500px" height="500px">

        <circle cx="250" cy="250" r="175" fill="blue/>
                
        <text x="250" y="275" font-size="60" text-anchor="middle" fill="white">ABC</text>
                
        </svg>`)
    })
})

describe('Render Triangle', () => {
    it('Parameters pass', () => {
        const triangle = new Triangle()
        triangle.backgroundColor = 'red'
        triangle.svgText = '123'
        triangle.textColor = 'black'

        expect(triangle.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="500px" height="500px">

        <polygon points="250,50 100,300 400,300" fill="red"/>
            
        <text x="247.5" y="230" font-size="60" text-anchor="middle" fill="black">123</text>
                
        </svg>`)
    })
})

describe('Render Square', () => {
    it('Parameters pass', () => {
        const square = new Square()
        square.backgroundColor = 'green'
        square.svgText = 'XYZ'
        square.textColor = 'purple'

        expect(square.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="500px" height="500px">
    
        <rect x="100" y="100" width="350" height="350" fill="green"/>
            
        <text x="275" y="275" font-size="60" text-anchor="middle" fill="purple">XYZ</text>
        
        </svg>`)
    })
})
