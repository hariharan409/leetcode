/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let possibleCount = 1; // Start with the original string as one possibility.
    
    for (let i = 1; i < word.length; i++) {
        // Check for repeated characters
        if (word[i - 1] === word[i]) {
            // Add one possibility for each group of consecutive duplicates.
            possibleCount++;
        }
    }
    
    return possibleCount;
};

console.log(possibleStringCount(word = "abbcccc"));