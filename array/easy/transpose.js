

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = (matrix) => {
    let rows = matrix[0].length;
    let cols = matrix.length;
    let tempMatrix = Array.from({length: rows},() => Array(cols));
    for(let i=0;i<matrix.length;i++) {
        for(let j=0;j<matrix[i].length;j++) {
            tempMatrix[j][i] = matrix[i][j];
        }
    }

    return tempMatrix;
};

console.log(transpose(matrix = [[1,2,3],[4,5,6],[7,8,9]]));