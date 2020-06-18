class Line {
    constructor(starA, starB) {
        this.starA = starA
        this.starB = starB
        this.aX = starA.positionX
        this.aY = starA.positionY
        this.bX = starB.positionX
        this.bY = starB.positionY
    }

    distance() {
        return Math.sqrt(Math.pow((this.aX - this.bX), 2) + Math.pow((this.aY - this.bY), 2))
    }
}

function createAllPossibleLinesBetweenStars(starsList) {
    const linesList = []
        for (let i = starsList.length - 1; i > 0; i--) {
            for(let j = 0; j < i; j++) {
                let line = new Line(starsList[i], starsList[j])
                linesList.push(line)
            }
        }
    return linesList
}

function filterLinesByDistance(linesList, distanceThreshold) {
    const filteredLinesList = []
    for(let i = 0; i < linesList.length; i++){
        let lineDistance = linesList[i].distance()
        if( lineDistance > 0 && lineDistance < distanceThreshold) {
            filteredLinesList.push(linesList[i])
            } else {
                continue
            }
        }
        return filteredLinesList
}

 if (typeof module === "object") { // if we are in node environment
    console.log("Line module was loaded");
    module.exports = Line; // default export
    module.exports.createAllPossibleLinesBetweenStars = createAllPossibleLinesBetweenStars;
    module.exports.filterLinesByDistance = filterLinesByDistance;
}