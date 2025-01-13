


/**
 * @param {string} word
 * @return {number}
 */

// Hash map solution
const numberOfSpecialChars = function(word) {
    let frequencyMap = {};
    let specialCount = 0;

    // Build the frequency map
    for(let char of word) {
        frequencyMap[char] = true;
    }

    // Check for special characters
    for(let char in frequencyMap) {
        const lowerChar = char.toLowerCase();
        const upperChar = char.toUpperCase();
       if(frequencyMap[lowerChar] && frequencyMap[upperChar]) {
           specialCount += 1;

           delete frequencyMap[lowerChar];
           delete frequencyMap[upperChar];
       }
    }
    return specialCount;
};

// set data structure solution
function numberOfSpecialChars(word) {
    const lowercaseSet = new Set();
    const uppercaseSet = new Set();

    for (const char of word) {
        if (char >= 'a' && char <= 'z') {
            lowercaseSet.add(char);
        } else if (char >= 'A' && char <= 'Z') {
            uppercaseSet.add(char.toLowerCase());
        }
    }

    // Find the intersection of the sets
    let count = 0;
    for (const char of lowercaseSet) {
        if (uppercaseSet.has(char)) {
            count++;
        }
    }

    return count;
}

console.log(numberOfSpecialChars(word = "aaAbcBC"));