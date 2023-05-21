class Shape {
    constructor(textColor, svgText, backgroundColor) {
        this.textColor = textColor
        this.svgText = svgText
        this.backgroundColor = backgroundColor
    }
}

class Circle extends Shape{
    render(){
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="400px" height="400px">
        <circle cs="200" cy="200" r="100" height="100%" width="100%" fill="${this.backgroundColor}">
        <text x="200" y="200" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.svgText}</text>
        </svg>`
    }
}

class Square extends Shape{
    render(){
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="400px" height="400px">
        <rect x="200" y="200" height="100%" width="100%" fill="${this.backgroundColor}">
        <text x="200" y="200" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.svgText}</text>
        </svg>`
    }
}

class Triangle extends Shape{
    render(){
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="400px" height="400px">
        <polygon points+"200,50 100,250 350,250" height="100%" width="100%" fill="${this.backgroundColor}">
        <text x="200" y="200" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.svgText}</text>
        </svg>`
    }
}

module.exports = { Circle, Square, Triangle }