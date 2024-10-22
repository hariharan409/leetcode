
/**
 * 
 * @param {String} coordinates 
 */
const squareIsWhite = (coordinates) => {
    let chessBoard = {"a": "odd","b": "even","c": "odd","d": "even","e": "odd","f": "even","g": "odd","h": "even"};
    let xaxis = coordinates[0];
    let yaxis = parseInt(coordinates[1]);

    if(chessBoard[xaxis] === "odd") {
        return yaxis % 2 === 0 ? true : false;
    } else {
        return yaxis % 2 === 0 ? false : true;
    }
}

console.log(squareIsWhite(coordinates = "a1"));