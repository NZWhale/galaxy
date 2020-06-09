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

if (typeof module === "object") { // if we are in node environment
    console.log("yep, node!")
    module.exports = Star; // default export
}