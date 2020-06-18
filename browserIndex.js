"use strict";


const CANVAS = document.getElementById("space");
const ctx = CANVAS.getContext("2d");
const field = new Field(1680, 900);
const starsList = generateStarsList(100, field);
CANVAS.width = field.width;
CANVAS.height = field.height;

const distanceThreshold = 250;
const refreshRateMillisseconds = 30;
function loop() { // executes each 10ms
    for (let i = 0; i < starsList.length; i++) {
        ctx.clearRect(0, 0, CANVAS.width, CANVAS.height);
        starsList[i].move(field)
    }
    // clear(ctx)
    drawStarsOnCanvas(ctx, starsList);
    const allLines = createAllPossibleLinesBetweenStars(starsList);
    const linesToDraw = filterLinesByDistance(allLines, distanceThreshold);
    drawLinesOnCanvas(ctx, linesToDraw);
}

setInterval(loop, refreshRateMillisseconds);
