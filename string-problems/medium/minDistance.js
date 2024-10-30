
/**
 * 
 * @param {String} word1 
 * @param {String} word2 
 */
const minDistance = (word1,word2) => {
    word1 = word1.slice(0,word2.length - Math.abs(word1.length - word2.length));
}

console.log(minDistance(word1 = "horse", word2 = "ros"));