
// 2185. Counting Words With a Given Prefix

// You are given an array of strings words and a string pref.

// Return the number of strings in words that contain pref as a prefix.

// A prefix of a string s is any leading contiguous substring of s.

/**
 * @param {string[]} wordList
 * @param {string} prefix
 * @return {number}
 */
// const countingWordsWithGivenPrefix = (wordList,prefix) => {
//     let count = 0;
//     for(word of wordList) {
//         if(word.startsWith(prefix)) {
//             count++;
//         }
//     }
//     return count;
// }

// ES6 COLUTION
const countingWordsWithGivenPrefix = (wordList,prefix) => {
    return wordList.filter((word) => word.startsWith(prefix)).length;
}

console.log(countingWordsWithGivenPrefix(wordList = ["pay","attention","practice","attend"],prefix = "at"))