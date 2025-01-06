
/**
 * 
 * @param {String} pattern 
 * @param {String} s 
 */
const wordPattern = (pattern,s) => {
    const words = s.split(" ");

    // Check if lengths match
    if (pattern.length !== words.length) {
        return false;
    }

    // Maps to track correspondences
    const charToWord = new Map();
    const wordToChar = new Map();

    for(let i=0;i<pattern.length;i++) {
        const char = pattern[i];
        const word = words[i];

        // Check if there’s an existing mapping for the pattern character
        if (charToWord.has(char) && charToWord.get(char) !== word) {
            return false;
        }

        // Check if there’s an existing mapping for the word
        if (wordToChar.has(word) && wordToChar.get(word) !== char) {
            return false;
        }

        // Establish the mapping if none exists
        charToWord.set(char, word);
        wordToChar.set(word, char);
    }
    return true;
}

console.log(wordPattern(pattern = "abba", s = "dog cat cat dog"));