
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralMatrix = (matrix) => {
    try {
        if(!matrix.length || !matrix[0].length) return [];
        const result = [];
        let left = 0;
        let right = matrix[0].length - 1;
        let top = 0;
        let bottom = matrix.length - 1;

        while(left <= right && top <= bottom) {
            // Traverse from left to right across the top row
            for(let i=left;i<=right;i++) {
                result.push(matrix[top][i]);
            }
            top++;
            // Traverse from top to bottom down the right column
            for(let i=top;i<=bottom;i++) {
                result.push(matrix[i][right]);
            }
            right--;
            if(top <= bottom) {
                // Traverse from right to left across the bottom row
                for(let i=right;i>=left;i--) {
                    result.push(matrix[bottom][i]);
                }
                bottom--;
            }
            if(left <= right) {
                // Traverse from bottom to top up the left column
                for(let i=bottom;i>=top;i--) {
                    result.push(matrix[i][left]);
                }
                left++;
            }
        }
        return result;
    } catch (error) {
        console.log(error.message);
    }
}

console.log(spiralMatrix([[1,2,3],[4,5,6],[7,8,9]]));