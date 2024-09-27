
/**
 * @param {string} originalStr
 * @param {string} shuffledStr
 * @return {character}
 */
/* BIG O(N SQUARE) */
// const findTheDifference = (originalStr,shuffledStr) => {
    
//     for(let i=0;i<shuffledStr.length;i++) {
//         if(originalStr.includes(shuffledStr[i])) {
//             originalStr = originalStr.replace(shuffledStr[i],"");
//         } else {
//             return shuffledStr[i];
//         }
//     }
// }

/* OPTIMIZED SOLUTION USING HASH TABLE */
var findTheDifference = function(originalStr, shuffledStr) {
    // Create a frequency map for characters in the original string
    let charCount = {};

    // Count frequency of each character in originalStr
    for (let char of originalStr) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Check the characters in shuffledStr
    for (let char of shuffledStr) {
        // If the character isn't found or its count is exhausted, return it
        if (!charCount[char]) {
            return char;
        } else {
            charCount[char]--;
        }
    }
};

console.log(findTheDifference(originalStr = "abcd", shuffledStr = "abcde"));