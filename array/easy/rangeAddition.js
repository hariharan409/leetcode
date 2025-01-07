

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var rangeAddition = function(m, n, ops) {
     // If there are no operations, all cells have the same value
     if (ops.length === 0) {
        return m * n;
    }

    // Initialize min values for ai and bi
    let minA = m;
    let minB = n;

    // Find the minimum ai and bi across all operations
    for (const [ai, bi] of ops) {
        minA = Math.min(minA, ai);
        minB = Math.min(minB, bi);
    }

    // The number of maximum integers is the area of the smallest rectangle
    return minA * minB;
};

console.log(rangeAddition(m = 3, n = 3, ops = [[2,2],[3,3]]));