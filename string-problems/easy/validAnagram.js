// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// const validAnagram = (s,t) => {
//     /* EASIEST WAY TO FIND THE ANAGRAM IS SORT AND COMPARE BOTH THE STRING */
//     let sortedS = s.split("").sort().join("");
//     let sortedT = t.split("").sort().join("");
//     return (sortedS === sortedT);
// }

// ------------------------------------------------------------------------------------------------------------

// You can make the code more efficient by avoiding sorting and instead using a frequency counter to compare character counts, 
// which will have a linear time complexity of 𝑂 (𝑛) O(n).
const validAnagram = (s,t) => {
    if(s.length !== t.length) return false;
    const count = {};
    // Count characters in the first string
    for(let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    // Decrement count while checking characters in the second string
    for(let char of t) {
        if(!count[char]) return false;
        count[char] -= 1;
    }
    return true;
}

console.log(validAnagram(s="anagram",t="nagaram"));