"use strict"
const   CANVAS        = document.getElementById('space');
        CANVAS.width  = window.innerWidth;
        CANVAS.height = window.innerHeight; 
const   ctx           = CANVAS.getContext('2d');
        ctx.fillStyle = 'red';

let randomNumber = function() {
        let number = Math.floor(Math.random() * 10) - 5 
        return number
}
let num = randomNumber()

let singleStar = {
    generatePosition: function() {
        let randomX       = Math.floor(Math.random() * CANVAS.width);
        let randomY       = Math.floor(Math.random() * CANVAS.height);
        this.position      = [randomX, randomY]
        return this.position
    },
    drawSingleStar: function() {
        ctx.beginPath()
        ctx.arc(this.position[0], this.position[1], 2, 0, Math.PI * 2);
        ctx.fill()
        ctx.closePath()
    },
    starMotion: function() {
        if(this.position[0] < 1680 || this.position[1] < 1024) {
        this.position[0] += num
        this.position[1] += num
        } else {
            this.position[0] -= num
            this.position[1] -= num
        }
    },

};