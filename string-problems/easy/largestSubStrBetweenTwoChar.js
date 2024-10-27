
/**
 * 
 * @param {String} s 
 */
const largestSubStrBetweenTwoChar = (s) => {
    let longestSubStrCount = -1;  // -1 for no matches case
    let charIndexes = {};  // To track the first occurrence of each character

    for(let i=0;i<s.length;i++) {
        if(charIndexes[s[i]] !== undefined) {
            let currentLength = i - charIndexes[s[i]] - 1;
            longestSubStrCount = Math.max(currentLength,longestSubStrCount);
        } else {
            // If the character is seen for the first time, store its index
            charIndexes[s[i]] = i;
        }
    }
    return longestSubStrCount;
}

console.log(largestSubStrBetweenTwoChar(s = "mgntdygtxrvxjnwksqhxuxtrv"));