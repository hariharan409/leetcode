
/**
 * 
 * @param {Array} words 
 * @param {String} order 
 */
const alienDictionary = (words, order) => {
    // Create a map for the alien language order
    const orderMap = new Map();
    for (let i = 0; i < order.length; i++) {
        orderMap.set(order[i], i);
    }

    // Compare each pair of consecutive words
    for (let i = 1; i < words.length; i++) {
        if (!isOrdered(words[i - 1], words[i], orderMap)) {
            return false;
        }
    }

    return true;
};

// Helper function to compare two words according to the alien order
const isOrdered = (word1, word2, orderMap) => {
    const minLength = Math.min(word1.length, word2.length);
    
    // Compare character by character
    for (let i = 0; i < minLength; i++) {
        const index1 = orderMap.get(word1[i]);
        const index2 = orderMap.get(word2[i]);

        if (index1 < index2) {
            return true; // word1 is lexicographically smaller
        } else if (index1 > index2) {
            return false; // word1 is lexicographically larger, so wrong order
        }
    }

    // If we reach here, the first minLength characters are the same.
    // Now check if the first word is longer (and therefore should come later).
    return word1.length <= word2.length;
};

console.log(alienDictionary(words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"));