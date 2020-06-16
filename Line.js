class Line {
    constructor(starA, starB) {
        // TODO: implement
    }

    distance() { // should return line distance
        // TODO: implement
    }
}

function createAllPossibleLinesBetweenStars(starsList) {
    // TODO: Implement
}

function filterLinesByDistance(lines, distanceThreshold) {
    // TODO: Implement
}

if (typeof module === "object") { // if we are in node environment
    console.log("Line module was loaded");
    module.exports = Line; // default export
    module.exports.createAllPossibleLinesBetweenStars = createAllPossibleLinesBetweenStars;
    module.exports.filterLinesByDistance = filterLinesByDistance;
}