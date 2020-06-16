"use strict"

function drawStarsOnCanvas(canvasContext, starsList) {
    for (let i = 0; i < starsList.length; i++) {
        canvasContext.fillStyle = 'purple';
        canvasContext.beginPath()
        canvasContext.arc(starsList[i].positionX, starsList[i].positionY, 2, 0, Math.PI * 2);
        canvasContext.fill()
        canvasContext.closePath()
    }
}

function drawLinesOnCanvas(canvasContext, starsList) {
    let halfOfArr = starsList.length/2
    for(let i = 0, j = halfOfArr; i < halfOfArr, j < starsList.length; i++, j++) {
        // if(starsList[i].positionX - starsList[j].positionX == 50){
            canvasContext.beginPath()
            canvasContext.moveTo(starsList[i].positionX, starsList[i].positionY)
            canvasContext.lineTo(starsList[j].positionX, starsList[j].positionY)
            canvasContext.closePath()
            canvasContext.stroke()
        // }
    }
}


drawStarsOnCanvas()
if (typeof module === "object") { // if we are in node environment
    console.log("yep, node!")
    module.exports.drawStarsOnCanvas = drawStarsOnCanvas
}
