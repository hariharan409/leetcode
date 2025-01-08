

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let flattenedArray = mat.flat();
    // if matcount not equal to (row * column) return the original array
    if(flattenedArray.length !== (r * c)) {
      return mat;
    }
  
    const reshapedMatrix = [];
    for (let i = 0; i < r; i++) {
        reshapedMatrix.push(flattenedArray.slice(i * c, (i + 1) * c));
    }
  
  
    return reshapedMatrix;
  
  };
  
  console.log(matrixReshape(mat = [[1,2],[3,4]], r = 1, c = 4));
  
  
  // Output: [[1,2,3,4]]