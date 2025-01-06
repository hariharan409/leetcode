
/**
 * 
 * @param {String[]} words 
 */
// const findWords = (words) => {
//     let finalArr = [];
//     const americanKeyboard = ["qwertyuiop","asdfghjkl","zxcvbnm"];
//     const row1Freq = {};
//     const row2Freq = {};
//     const row3Freq = {};

//     /**
//      * 
//      * @param {String[]} americanKeyboard 
//      */
//     const resetFreq = (americanKeyboard) => {
//         for(let char of americanKeyboard[0]) {
//             row1Freq[char] = (row1Freq[char] || 0) + 1;
//         }

//         for(let char of americanKeyboard[1]) {
//             row2Freq[char] = (row2Freq[char] || 0) + 1;
//         }

//         for(let char of americanKeyboard[2]) {
//             row3Freq[char] = (row3Freq[char] || 0) + 1;
//         }
//     }

//     for(let word of words) {
//         resetFreq(americanKeyboard);
//         let checkLine1 = canTypeInOneLine(word.toLowerCase(),row1Freq);
//         if(checkLine1) {
//             finalArr.push(word);
//             continue;
//         }
//         let checkLine2 = canTypeInOneLine(word.toLowerCase(),row2Freq);
//         if(checkLine2) {
//             finalArr.push(word);
//             continue;
//         }
//         let checkLine3 = canTypeInOneLine(word.toLowerCase(),row3Freq);
//         if(checkLine3) {
//             finalArr.push(word);
//         }
//     }
//     return finalArr;
// }

// /**
//  * 
//  * @param {String} word 
//  */
// const canTypeInOneLine = (word,lineFreq) => {
//     let freq = {};
//     for(let char of word) {
//         freq[char] = (freq[char] || 0) + 1;
//     }
//     for(let key in freq) {
//         if(lineFreq[key]) {
//             freq[key] = 0;
//         }
//     }
//     for(let key in freq) {
//         if(freq[key] !== 0) {
//             return false;
//         }
//     }
//     return true;
// }

/**
 * @param {String[]} words
 * @return {String[]}
 */
const findWords = (words) => {
    // Define sets for each keyboard row
    const row1 = new Set("qwertyuiop");
    const row2 = new Set("asdfghjkl");
    const row3 = new Set("zxcvbnm");
    
    const result = [];
    
    // Function to check if all characters in a word belong to the same row
    const canTypeInOneRow = (word, row) => {
        for (let char of word.toLowerCase()) {
            if (!row.has(char)) return false;
        }
        return true;
    };
    
    for (let word of words) {
        // Check if the word can be typed on any of the rows
        if (canTypeInOneRow(word, row1) || canTypeInOneRow(word, row2) || canTypeInOneRow(word, row3)) {
            result.push(word);
        }
    }
    
    return result;
};

console.log(findWords(words = ["Hello","Alaska","Dad","Peace"]));