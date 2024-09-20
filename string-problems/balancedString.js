
// 1221. Split a String in Balanced Strings

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

/**
 * @param {string} originalStr
 * @return {number}
 */
const balancedString = (originalStr) => {
    let tempObj = {
        rCount: 0,
        lCount: 0
    };
    let output = 0;
    for(let i=0;i<originalStr.length;i++) {
        originalStr[i] === "R" ? tempObj.rCount++ : tempObj.lCount++;
        if(tempObj.rCount === tempObj.lCount) {
            output++;
            tempObj = {
                rCount: 0,
                lCount: 0
            }
        }
    }
    return output;
}

console.log(balancedString("RLRRLLRLRL"))