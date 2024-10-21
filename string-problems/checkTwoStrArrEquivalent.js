
/**
 * 
 * @param {Array} word1 
 * @param {Array} word2 
 */
const checkTwoStrArrEquivalent = (word1,word2) => {
    return word1.join("") === word2.join("");
}

console.log(checkTwoStrArrEquivalent(word1 = ["ab", "c"], word2 = ["a", "bc"]));