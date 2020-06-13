"use strict"

const CANVAS = document.getElementById("space")
const ctx = CANVAS.getContext("2d")
const field = new Field(640, 320)
const starsList = generateStarsList(10, field)
CANVAS.width = field.width
CANVAS.height = field.height

drawStarsOnCanvas(ctx, starsList, field)

