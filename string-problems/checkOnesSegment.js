
/**
 * 
 * @param {String} s 
 * @returns 
 */
const checkOnesSegment = (s) => {
    let isZeroFound = false;

    for(let char of s) {
        if(char === "0") {
            isZeroFound = true;
        }
        if(isZeroFound && char === "1") {
            return false;
        }
    }
    return true;
}

console.log(checkOnesSegment(s = "10011"));