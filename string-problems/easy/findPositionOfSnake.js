

/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
/*
 // solution 1 using matrix
 const finalPositionOfSnake = function(n, commands) {
    let matrix = createMatrix(n);
    let snakePosition = [0,0];

    for(let command of commands) {
        if(command === "RIGHT") {
            snakePosition[1]++;
        } else if(command === "LEFT") {
            snakePosition[1]--;
        } else if(command === "DOWN") {
            snakePosition[0]++;
        } else if(command === "UP") {
            snakePosition[0]--;
        }
    }
    return matrix[snakePosition[0]][snakePosition[1]];
};

const createMatrix = (n) => {
    let matrix = [];
    let tempNum = 0;
    for(let i=0;i<n;i++) {
        const row = [];
        for(let j=0;j<n;j++) {
            row.push(tempNum);
            tempNum++;
        }
        matrix.push(row);
    }
    return matrix;
}
    */

 // solution 2 using formula to find the grid value
const finalPositionOfSnake = function(n, commands) {
    let snakePosition = [0,0];

    for(let command of commands) {
        if(command === "RIGHT") {
            snakePosition[1]++;
        } else if(command === "LEFT") {
            snakePosition[1]--;
        } else if(command === "DOWN") {
            snakePosition[0]++;
        } else if(command === "UP") {
            snakePosition[0]--;
        }
    }
    // formula to find matrix[i,j] = (row * n) + column
    return (snakePosition[0] * n) + snakePosition[1];
};




console.log(finalPositionOfSnake(n = 2, commands = ["RIGHT","DOWN"]));