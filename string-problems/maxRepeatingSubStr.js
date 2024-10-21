
/**
 * 
 * @param {String} sequence 
 * @param {String} word 
 */
const maxRepeatingSubStr = (sequence,word) => {
    let repeatCount = 0;
    let maxRepeat = 0;
    let currentStr = word;

    while (sequence.includes(currentStr)) {
        repeatCount++;
        maxRepeat = Math.max(maxRepeat, repeatCount);
        currentStr += word;  // Keep adding the word for consecutive repeats
    }

    return maxRepeat;
}

console.log(maxRepeatingSubStr(sequence = "aaabaaaabaaabaaaabaaaabaaaabaaaaba", word = "aaaba"));