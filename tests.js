const Star = require("./Star.js")
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