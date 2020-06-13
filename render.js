"use strict"

function drawStarsOnCanvas(canvasContext, starsList, field) {
    for (let i = 0; i < starsList.length; i++) {
        ctx.fillStyle = 'red';
        ctx.beginPath()
        ctx.arc(starsList[i].positionX, starsList[i].positionY, 2, 0, Math.PI * 2);
        ctx.fill()
        ctx.closePath()
    }
}
drawStarsOnCanvas()
if (typeof module === "object") { // if we are in node environment
    console.log("yep, node!")
    module.exports.drawStarsOnCanvas = drawStarsOnCanvas
}
function drawStarOnCanvas(cCtx, star) {

}