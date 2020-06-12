const Star = require("../Star.js")
const Field = require("../Field.js")
const generateStarsList = require("../Star.js").generateStarsList
const assert = require('assert').strict;

function testStarCreation() {
    const myStar = new Star(1, 2, 3, 4);
    // x coord should be the 1st argument
    // y coord should be the second argument
    // x vector should be the third argument
    // y vector should be the fourth argument
    assert(myStar.positionX == 1, "positionX argument was not asssigned to positionX property")
    assert(myStar.positionY == 2, "positionY argument was not asssigned to positionY property")
    assert(myStar.vectorX == 3, "vectorX argument was not asssigned to vectorX property")
    assert(myStar.vectorY == 4, "vectorY argument was not asssigned to vectorY property")

    const myStar2 = new Star(7, 8, 9, 10);
    // x coord should be the 1st argument
    // y coord should be the second argument
    // x vector should be the third argument
    // y vector should be the fourth argument
    assert(myStar2.positionX == 7, "positionX argument wasa not asssigned to positionX property")
    assert(myStar2.positionY == 8, "positionY argument was not asssigned to positionY property")
    assert(myStar2.vectorX == 9, "vectorX argument was not asssigned to vectorX property")
    assert(myStar2.vectorY == 10, "vectorY argument was not asssigned to vectorY property")
}

function testStarMove() {
    const myStar = new Star(10, 10, 0.5, -0.25);
    myStar.move();
    assert(myStar.positionX == 10.5, "x position wass not changed properly")
    assert(myStar.positionY == 9.75, "y position wass not changed properly")
}

testStarCreation();
testStarMove();




// I think it is acceptable to put this function into Star module because
// it is basically about generating stars, but you may put it into a separate module if you like.
// You may take a look at these screencasts in order to understand node modules concept better:
// https://youtu.be/g740J-RyoR4
// https://youtu.be/xs6sSylr-88 (first 10 minutes, the second part is not necessary for now)
// const Star = require("../Star");
// Note that it is not class method!
// I don't create class instance here, google node modules exports, watch screencasts.
// const generateStarsList = Star.generateStarsList;

function testGeneratedListLength() {
    const myField = new Field(640, 480);
    const myAmount = 10
    const starsList = generateStarsList(myAmount, myField);

    const expectedListLength = 10
    assert(
        starsList.length == expectedListLength,
        `Invalid star list length, expected ${expectedListLength}, received ${starsList.length}`
    );
}

function testGeneratedListPointsRange() {
    const myField = new Field(640, 480);
    const starsList = generateStarsList(10, myField);

    for (let i = 0; i< starsList.length; i++) {
        const star = starsList[i];
        assert(
            star.positionX < 640 && star.positionX > 0,
            `X coordinate of the star doesn't fit field range (${star.xPosition})`
        );
        assert(
            star.positionY < 640 && star.positionY > 0,
            `Y coordinate of the star doesn't fit field range (${star.yPosition})`
        );
    }
}

testGeneratedListLength();
testGeneratedListPointsRange();