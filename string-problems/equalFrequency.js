
/**
 * 
 * @param {String} word 
 */
const equalFrequency = (word) => {
    const freqMap = {};

    // Step 1: Count the frequency of each character
    for (let char of word) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    // Get the frequencies into an array
    const frequencies = Object.values(freqMap);

    // Step 2: Try removing one occurrence of each character and check if the remaining frequencies are equal
    for (let i = 0; i < frequencies.length; i++) {
        const tempFreqs = [...frequencies];
        tempFreqs[i]--; // Remove one occurrence of this character

        // Filter out any zero frequencies
        const remainingFreqs = tempFreqs.filter(f => f > 0);

        // Check if all remaining frequencies are the same
        const allSame = remainingFreqs.every(f => f === remainingFreqs[0]);

        if (allSame) return true;
    }

    // If no valid removal found, return false
    return false;
}

console.log(equalFrequency(word = "abcc"));