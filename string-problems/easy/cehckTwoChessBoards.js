

/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function(coordinate1, coordinate2) {
    let chessColumnMap = {
        a: 1,b:2,c:3,d:4,e:5,f:6,g:7,h:8
    };
    let [square1Color,square2Color] = ["",""];
    if(chessColumnMap[coordinate1[0]] % 2 === 0) {
        if(parseInt(coordinate1[1]) % 2 === 0) {
            square1Color = "black";
        } else {
            square1Color = "white";
        }
    } else {
        if(parseInt(coordinate1[1]) % 2 === 0) {
            square1Color = "white";
        } else {
            square1Color = "black";
        }
    }

    if(chessColumnMap[coordinate2[0]] % 2 === 0) {
        if(parseInt(coordinate2[1]) % 2 === 0) {
            square2Color = "black";
        } else {
            square2Color = "white";
        }
    } else {
        if(parseInt(coordinate2[1]) % 2 === 0) {
            square2Color = "white";
        } else {
            square2Color = "black";
        }
    }
    
    return (square1Color === square2Color) ? true : false; 
};


/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
// solution 2
var checkTwoChessboards = function(coordinate1, coordinate2) {
    const getSquareColor = (coordinate) => {
        const column = coordinate[0].charCodeAt(0) - 'a'.charCodeAt(0) + 1; // Convert column letter to number
        const row = parseInt(coordinate[1]);
        return (column + row) % 2; // 0 for black, 1 for white
    };
    
    return getSquareColor(coordinate1) === getSquareColor(coordinate2);
};


console.log(checkTwoChessboards(coordinate1 = "a1", coordinate2 = "c3"));