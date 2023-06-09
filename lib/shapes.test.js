const { Circle, Triangle, Square} = require('./shapes.js')

const testCases = [
    {
        shapeClass: Circle,
        backgroundColor: 'blue',
        svgText: 'ABC',
        textColor: 'white',
        description: 'Render Circle',
        expectedSvg: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="500px" height="500px">

        <circle cx="250" cy="250" r="175" fill="blue/>
                
        <text x="250" y="275" font-size="60" text-anchor="middle" fill="white">ABC</text>
                
        </svg>`
    },
    {
        shapeClass: Triangle,
        backgroundColor: 'red',
        svgText: '123',
        textColor: 'black',
        description: 'Render Triangle',
        expectedSvg: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="500px" height="500px">

        <polygon points="250,50 100,300 400,300" fill="red"/>
            
        <text x="247.5" y="230" font-size="60" text-anchor="middle" fill="black">123</text>
                
        </svg>`
    },
    {
        shapeClass: Square,
        backgroundColor: 'green',
        svgText: 'XYZ',
        textColor: 'purple',
        description: 'Render Square',
        expectedSvg: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="500px" height="500px">
    
        <rect x="100" y="100" width="350" height="350" fill="green"/>
            
        <text x="275" y="275" font-size="60" text-anchor="middle" fill="purple">XYZ</text>
        
        </svg>`
    }
];

testCases.forEach(({shapeClass, backgroundColor, svgText, textColor, description, expectedSvg}) => {
    describe(description, () => {
        it('Parameters pass', () => {
            const shape = new shapeClass()
            shape.backgroundColor = backgroundColor;
            shape.svgText = svgText;
            shape.textColor = textColor;

            expect(shape.render()).toEqual(expectedSvg);
        });
    });
});