
/**
 * 
 * @param {String} sentence 
 */
const isCircularSentence = (sentence) => {
    let sentenceArr = sentence.split(" ");

    for(let i=1;i<sentenceArr.length;i++) {
        if(sentenceArr[i][0] !== sentenceArr[i-1][sentenceArr[i-1].length - 1]) {
            return false;
        }
    }

    if(sentenceArr[sentenceArr.length - 1][sentenceArr[sentenceArr.length - 1].length - 1] !== sentenceArr[0][0]) {
        return false;
    }
    return true;
}

// const isCircularSentence = function(sentence) {
//     // Split the sentence into an array of words
//     const words = sentence.split(" ");

//     // Check each word with the previous word
//     for (let i = 1; i < words.length; i++) {
//         if (words[i][0] !== words[i - 1].slice(-1)) {
//             return false;
//         }
//     }

//     // Check if the last word's last character matches the first word's first character
//     if (words[words.length - 1].slice(-1) !== words[0][0]) {
//         return false;
//     }

//     // If all checks pass, return true
//     return true;
// };

console.log(isCircularSentence(sentence = "leetcode exercises sound delightful"));