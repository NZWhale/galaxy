"use strict";

function drawStarsOnCanvas(canvasContext, starsList) {
    for (let i = 0; i < starsList.length; i++) {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(starsList[i].positionX, starsList[i].positionY, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath()
    }
}

function drawLinesOnCanvas(canvasContext, linesList) {
    // TODO: Implement
}

if (typeof module === "object") { // if we are in node environment
    console.log("render module was loaded");
    module.exports.drawStarsOnCanvas = drawStarsOnCanvas;
    module.exports.drawLinesOnCanvas = drawLinesOnCanvas;
}