"use strict"



class Field {// this class describe properties of field
    constructor(width, height) {
        this.width = width
        this.height = height
    }
}

if (typeof module === "object") { // if we are in node environment
    console.log("yep, node!")
    module.exports = Field; // default export
}