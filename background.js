"use strict"
const CANVAS        = document.getElementById('space');
      CANVAS.width  = window.innerWidth;
      CANVAS.height = window.innerHeight; 
const ctx           = CANVAS.getContext('2d');
      ctx.fillStyle = 'grey';

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
        ctx.beginPath()
        ctx.arc(arrayOfStars[i][0], arrayOfStars[i][1], 2, 0, Math.PI * 2);
        ctx.fill()
        ctx.closePath()
    }
}

let randomNumber = function() {
    let number = Math.floor(Math.random() * 10) - 5 
    return number
}

    //function which makes stars moveable
let motionOfStars = function() {
        for(let i = 0 ; i < arrayOfStars.length; i++){
            let currentStar = arrayOfStars[i]
                currentStar[0] = currentStar[0] + randomNumber()
                currentStar[1] = currentStar[1] + randomNumber()
        }
            // if(i % 2) {
            //     currentStar[0]++
            //     currentStar[1]++
            // } else {
            //     currentStar[0]--
            //     currentStar[1]--
            // }
        ctx.clearRect(0, 0, CANVAS.width, CANVAS.height);
        drawStars()
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

    setInterval(motionOfStars, 0)
