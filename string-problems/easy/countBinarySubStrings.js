
/**
 * 
 * @param {String} s 
 */
const countBinarySubStrings = (s) => {
    const groups = [];
    
    // Step 1: Count the lengths of consecutive '0's and '1's
    let count = 1;
    for (let i = 1; i < s.length; i++) {
        console.log(`s[i] - ${s[i]} ||| s[i-1] - ${s[i-1]}`)
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            groups.push(count);
            count = 1; // reset for the new character
        }
    }
    groups.push(count); // push the last group

    // Step 2: Count valid binary substrings
    let result = 0;
    for (let i = 1; i < groups.length; i++) {
        // Minimum of the current group and the previous group gives the valid substrings
        result += Math.min(groups[i], groups[i - 1]);
    }

    return result;
}

console.log(countBinarySubStrings(s="10101"));