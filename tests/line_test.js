const Line = require("../Line");
const createAllPossibleLinesBetweenStars = require("../Line").createAllPossibleLinesBetweenStars;
const filterLinesByDistance = require("../Line").filterLinesByDistance;
const Star = require("../Star");
const assert = require('assert').strict;

function testLineInitialization() {
    const myStarA = new Star(10, 10);
    const myStarB = new Star(20, 20);
    const myLine = new Line(myStarA, myStarB);
    
    assert(
        myLine.starA === myStarA,
        "starA property of Line was not initialised properly"
    );

    assert(
        myLine.starB === myStarB,
        "starB property of Line was not initialised properly"
    );
}

// Comparing float numbers is tricky, we can't simply compare them
// like integer numbers because of minor errors in calculations.
// Instead of direct comparison we calculate a difference between floats
// and if it is small enough then they are almost equal and function returns true.
// It's ok if you don't understand. Just try the following example in console and see what happens:
// 0.1 + 0.2 == 0.3 // (will return false)
// And then
// isClose(0.1 + 0.2, 0.3) // (will return true)
function isClose(a, b) {
    const floatComparisonThreshold = 0.0001;
    return Math.abs(a - b) < floatComparisonThreshold;
}

function testLineDistance() {
    const myStarA = new Star(0, 0);
    const myStarB = new Star(3, 4);
    const myLine = new Line(myStarA, myStarB);
    const distance = myLine.distance();
    const expectedDistance = 5;

    assert(
        // expectedDistance will definitely be float number so we use a special function for comparing floats
        isClose(distance, expectedDistance),
        `Error in distance calculation, expected ${expectedDistance}, received ${distance}`
    )
}

function testCreateAllLinesBetweenStars() {
    const myStarList = [
        new Star(10, 10),
        new Star(20, 20),
        new Star(30, 30),
        new Star(40, 40)
    ];
    const expectedLinesListLength = 6;
    const actualLinesList = createAllPossibleLinesBetweenStars(myStarList);
    assert(
        expectedLinesListLength === actualLinesList.length,
        `Error in distance calculation, expected ${expectedLinesListLength}, received ${actualLinesList.length}`
    );

    assert(
        actualLinesList[0] instanceof Line,
        "createAllPossibleLinesBetweenStars doesn't create list of lines"
    )
}

function testFilterLinesByDistance() {
    const distanceThreshold = 5;
    // Only first two points are close enough to each other
    // Distance between them is less that 5
    const myStarList = [
        new Star(1, 1),
        new Star(3.4, 4.5),
        new Star(10, 20)
    ];

    const linesList = createAllPossibleLinesBetweenStars(myStarList);
    const linesOfClosePoints = filterLinesByDistance(linesList, distanceThreshold);
    assert(
        linesOfClosePoints.length === 1,
        `Wrong close points calculation, expected ${1}, received ${linesOfClosePoints}`
    )
}


testLineInitialization();
testLineDistance();
testCreateAllLinesBetweenStars();
testFilterLinesByDistance();