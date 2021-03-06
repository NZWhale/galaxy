"use strict";

function drawStarsOnCanvas(canvasContext, starsList) {
    for (let i = 0; i < starsList.length; i++) {
        canvasContext.fillStyle = 'grey';
        canvasContext.beginPath();
        canvasContext.arc(starsList[i].positionX, starsList[i].positionY, 2, 0, Math.PI * 2);
        canvasContext.fill(); 
        canvasContext.closePath()
    }
}

function drawLinesOnCanvas(canvasContext, filteredLinesList) {
    for( let i = 0; i < filteredLinesList.length; i++){
        let line = filteredLinesList[i]
        canvasContext.beginPath();
        canvasContext.moveTo(line.aX,line.aY);
        canvasContext.lineTo(line.bX,line.bY);
        canvasContext.strokeStyle = "#708090";
        canvasContext.closePath();
        canvasContext.stroke();
    }
}

function clear(canvasContext){
    canvasContext.clearRect(0, 0, CANVAS.width, CANVAS.height);
}

if (typeof module === "object") { // if we are in node environment
    console.log("render module was loaded");
    module.exports.drawStarsOnCanvas = drawStarsOnCanvas;
    module.exports.drawLinesOnCanvas = drawLinesOnCanvas;
}
