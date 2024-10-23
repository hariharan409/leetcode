
/**
 * 
 * @param {String} word1 
 * @param {String} word2 
 */
const checkAlmostEquivalent = (word1,word2) => {
    const frequencyMap = {};

    // Count frequencies in word1
    for(let char of word1) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1; 
    }

    // Count frequencies in word2
    for(let char of word2) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1; 
    }

    // Check if the absolute difference for any character is greater than 3
    for(let char in frequencyMap) {
        if(Math.abs(frequencyMap[char]) > 3) {
            return false;
        }
    }
    return true;
}

console.log(checkAlmostEquivalent(word1 = "aaaa", word2 = "bccb"));