
/**
 * 
 * @param {String} ransomNote 
 * @param {String} magazine 
 */
const canConstruct = (ransomNote,magazine) => {
    // Build frequency map for magazine
    for (let i = 0; i < magazine.length; i++) {
        frequencyMap[magazine[i]] = (frequencyMap[magazine[i]] || 0) + 1;
    }

    // Check if ransomNote can be constructed
    for (let i = 0; i < ransomNote.length; i++) {
        if (!frequencyMap[ransomNote[i]] || frequencyMap[ransomNote[i]] === 0) {
            return false; // Not enough of this character
        }
        frequencyMap[ransomNote[i]]--;
    }

    return true;
}

console.log(canConstruct(ransomNote = "aa", magazine = "aab"));