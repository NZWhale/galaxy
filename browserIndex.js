"use strict"

const CANVAS = document.getElementById("space")
const ctx = CANVAS.getContext("2d")
const field = new Field(1024, 768)
const starsList = generateStarsList(50, field)
CANVAS.width = field.width
CANVAS.height = field.height


const refreshRateMillisseconds = 30;
function loop() { // executes each 10ms
    for (let i = 0; i < starsList.length; i++) {
        ctx.clearRect(0, 0, CANVAS.width, CANVAS.height);
        starsList[i].move(field)
    }
    drawStarsOnCanvas(ctx, starsList, field)
    drawLinesOnCanvas(ctx, starsList)
}

setInterval(loop, refreshRateMillisseconds)

// setInterval(drawLinesOnCanvas(ctx, starsList), refreshRateMillisseconds)
drawLinesOnCanvas(ctx, starsList)