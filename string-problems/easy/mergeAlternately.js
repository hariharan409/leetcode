
/**
 * 
 * @param {String} word1 
 * @param {String} word2 
 */
const mergeAlternately = (word1,word2) => {
    let tempIndex = 0;
    let finalStr = "";

    while(tempIndex < Math.max(word1.length,word2.length)) {
        finalStr += (word1[tempIndex] || "");
        finalStr += (word2[tempIndex] || "");
        tempIndex++;
    }
    return finalStr;
}

console.log(mergeAlternately(word1 = "ab", word2 = "pqrs"));