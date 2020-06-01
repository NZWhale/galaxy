"use strict"
const CANVAS        = document.getElementById('space');
      CANVAS.width  = window.innerWidth;
      CANVAS.height = window.innerHeight; 
const ctx           = CANVAS.getContext('2d');
    //   randomX       = Math.floor(Math.random() * CANVAS.width);
    //   randomY       = Math.floor(Math.random() * CANVAS.height);

    //function which generating stars positions
let arrayOfStars = new Array(); 
let generateStarsPositions = function() {
    for (let i = 0; i < 50; i++) {
        let randomX       = Math.floor(Math.random() * CANVAS.width);
        let randomY       = Math.floor(Math.random() * CANVAS.height);
        let starPosition = [randomX, randomY]
        arrayOfStars.push(starPosition)
    }
} 
    generateStarsPositions()

    //function which draws a stars
let drawStars = function() {
    for (let i = 0; i < arrayOfStars.length; i++) {
        ctx.fillStyle = 'red';
        ctx.beginPath()
        ctx.arc(arrayOfStars[i][0], arrayOfStars[i][1], 2, 0, Math.PI * 2);
        ctx.fill()
        ctx.closePath()
    }
}
    drawStars()

    //function which makes stars moveable
let motionOfStars = function() {
    while(true) {
        
        }
        // arrayOfStars.forEach(() => {
        // arrayOfStars[i++][i++];
        // });
    }
}

    motionOfStars()