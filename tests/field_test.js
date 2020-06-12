// Field class should contain field resolution
// It will be needed in various modules of the program. For example drawing module
// should know field proportions to draw canvas and stars genreation module
// should know field width and height to define range of acceptable coordinates

const Field = require("../Field.js");
const assert = require('assert').strict;

function testFieldConstructor() {
    const myField = new Field(320, 240);

    const expectedWidth = 320;
    assert(
        myField.width == expectedWidth,
        `Field width was not initialized properly, it's value is ${myField.width}, expected ${expectedWidth}`
    );

    const expectedHeight = 240;
    assert(
        myField.height == expectedHeight,
        `Field width was not initialized properly, it's value is ${myField.height}, expected ${expectedHeight}`
    );
}

testFieldConstructor();