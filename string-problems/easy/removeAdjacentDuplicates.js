// 1047. Remove All Adjacent Duplicates In String

// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

/* RECURSIVE APPROACH */ 

/**
 * @param {string} originalStr
 * @return {string}
 */
// const removeAdjacentDuplicates = (originalStr) => {
//     let currentIndex = 0;
//     while(currentIndex < originalStr.length) {
//          // If current character matches the next character
//         if(originalStr[currentIndex] === originalStr[currentIndex+1]) {
//             // Remove the adjacent duplicates
//             originalStr = originalStr.slice(0,currentIndex) + originalStr.slice(currentIndex+2);
//             // Recursively call the function to check for further adjacent duplicates
//             return removeAdjacentDuplicates(originalStr);
//         }
//         currentIndex++;
//     }
//     // When no more adjacent duplicates exist, return the final string
//     return originalStr;
// }

/* STACK SOLUTION O(n)*/
const removeAdjacentDuplicates = (originalStr) => {
    let finalArr = [];
    for(let i=0;i<originalStr.length;i++) {
        if(originalStr[i] === finalArr[finalArr.length - 1]) {
            finalArr.pop();
        } else {
            finalArr.push(originalStr[i]);
        }
    }
    return finalArr.join("");
}

console.log(removeAdjacentDuplicates("aababaab"));