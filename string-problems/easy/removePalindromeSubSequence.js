
/**
 * 
 * @param {String} s 
 */
const removePalindromeSubSequence = (s) => {
    if(s === s.split("").reverse().join("")) {
        return 1;
    }

    return 2;
}

console.log(removePalindromeSubSequence(s = "baabb"))