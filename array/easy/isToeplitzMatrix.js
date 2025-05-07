
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = (matrix) => {

    for(let i=1;i<matrix.length;i++) {
        for(let j=1;j<matrix[i].length;j++) {
            let currentDiagonalVal = matrix[i][j];
            let topLeft = matrix[i-1][j-1];
            if(topLeft !== currentDiagonalVal) {
                return false;
            }
        }
    }

    return true;
}

console.log(isToeplitzMatrix(matrix = [[1,2],[2,2]]));