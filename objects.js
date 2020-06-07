"use strict"
const   CANVAS        = document.getElementById('space');
        CANVAS.width  = window.innerWidth;
        CANVAS.height = window.innerHeight; 
const   ctx           = CANVAS.getContext('2d');
        ctx.fillStyle = 'red';

let randomXVector = function() {
        let xNumber = Math.floor(Math.random() * 10) - 5 
        return xNumber
}
let vectorX = randomXVector()

let randomYVector = function() {
    let yNumber = Math.floor(Math.random() * 10) - 5 
    return yNumber
}
let vectorY = randomYVector()

// This class is a star. It is generating star's coordinate and vector, and drawing it. 
// class Star  {
//     constructor(){
//         this.vectorX = randomXVector()
//         this.vectorY = randomYVector()
//         this.generatePosition()
//         this.drawingSingleStar()
//         this.moveStar()
//         while(this.position[0] < CANVAS.width || this.position[1] < CANVAS.height) {
//             this.moveStar()
//             ctx.clearRect(0, 0, CANVAS.width, CANVAS.height);
//             this.drawingSingleStar()
//         }
//     }
//     generatePosition() {
//         let randomX       = Math.floor(Math.random() * CANVAS.width);
//         let randomY       = Math.floor(Math.random() * CANVAS.height);
//         this.position     = [randomX, randomY]
//         return this.position
//     }
//     drawingSingleStar() {
//         ctx.beginPath()
//         ctx.arc(this.position[0], this.position[1], 2, 0, Math.PI * 2);
//         ctx.fill()
//         ctx.closePath()
//     }
//     moveStar() {
//         if(this.position[0] < CANVAS.width || this.position[1] < CANVAS.height) {
//         this.position[0] += vectorX
//         this.position[1] += vectorY
//         } else {
//             this.position[0] -= vectorX
//             this.position[1] -= vectorY
//         }
//     }

// };

class Star { //this class desribes properties of star
    constructor() {
        this.starXPosition()
        this.starYPosition()
        this.generateXYvector()
        while(true) {
        this.starXvector()
        this.starYvector()
        }
    }
    starXPosition() { // this method generates x  start position
        this.xPosition = Math.floor(Math.random() * window.innerHeight);
        return this.xPosition
    }
    starYPosition() { // this method generates y start position
        this.yPosition = Math.floor(Math.random() * window.innerWidth);
        return this.yPosition
    }
    generateXYvector() { // this method generates random number from -5 to 5 for the star's motion vector
        this.randomXVector = function() {
            this.xNumber = Math.floor(Math.random() * 10) - 5 
            return this.xNumber
    }
    this.vectorX = this.randomXVector()
    
        this.randomYVector = function() {
            this.yNumber = Math.floor(Math.random() * 10) - 5 
            return this.yNumber
    }
     this.vectorY = this.randomYVector()
    }
    starXvector() { // this method changes x position
        this.xPosition += this.xNumber
    }
    starYvector() { // this method changes y position
        this.yPosition += this.yNumber
    }
};