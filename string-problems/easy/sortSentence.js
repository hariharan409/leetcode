
/**
 * 
 * @param {String} s 
 */
// const sortSentence = (s) => {
//     let sArr = s.split(" ");
//     let finalArr = new Array(sArr.length);
//     for(let word of sArr) {
//         let index = word.slice(-1);
//         finalArr[index - 1] = word.slice(0,word.length - 1);
//     }
//     return finalArr.join(" ");
// }

/**
 * 
 * @param {String} s
 * @returns {String}
 */
const sortSentence = (s) => {
    // Split the sentence into words
    let words = s.split(" ");

    // Sort the words based on the number at the end
    words.sort((a, b) => {
        return parseInt(a[a.length - 1]) - parseInt(b[b.length - 1]);
    });

    // Remove the number at the end of each word and join the words
    return words.map(word => word.slice(0, -1)).join(" ");
}


console.log(sortSentence(s = "is2 sentence4 This1 a3"));