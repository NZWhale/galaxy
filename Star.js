"use strict"

class Star { //this class desribes properties of star
    constructor(x, y, xv, vy) {
        this.positionX = x
        this.positionY = y
        this.vectorX = xv
        this.vectorY = vy
    }
    move() {
        this.positionX += this.vectorX
        this.positionY += this.vectorY
    }
};

function generateStarsList(amount, field) {
    let starsList = []
    for (let i = 0; i < amount; i++){
        const y = Math.floor(Math.random() * field.height);
        const x = Math.floor(Math.random() * field.width);
        const vx = Math.random()
        const vy = Math.random()
        const starPosition = new Star(x, y, vx, vy)
        starsList.push(starPosition)
    }
    return starsList
}

if (typeof module === "object") { // if we are in node environment
    console.log("yep, node!")
    module.exports = Star; // default export
    module.exports.generateStarsList = generateStarsList 
}

