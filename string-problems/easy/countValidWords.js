
/**
 * 
 * @param {String} sentence 
 */
const countValidWords = (sentence) => {
    let words = sentence.trim().split(/\s+/);
    let count = 0;

    for(let word of words) {
        if(isValidWord(word)) {
            count++;
        }
    }
    return count;
}

const isValidWord = (word) => {
    // Rule 1: It should not contain digits
    if(/[0-9]/.test(word)) {
        return false;
    }
    // Rule 2: Hyphen check
    let hyphenCount = (word.match(/-/g) || []).length;
    if (hyphenCount > 1) return false;
    if(hyphenCount === 1) {
        let hyphenIndex = word.indexOf("-");
        // Check if hyphen is surrounded by letters
        if (hyphenIndex === 0 || hyphenIndex === word.length - 1) return false;
        if (!/[a-z]/.test(word[hyphenIndex - 1]) || !/[a-z]/.test(word[hyphenIndex + 1])) return false;
    }

    // Rule 3: Punctuation check, must be at the end
    let punctuationCount = (word.match(/[!,.]/g) || []).length;
    if (punctuationCount > 1) return false;
    if (punctuationCount === 1) {
        if (!/[!,.]/.test(word[word.length - 1])) return false;
    }

    // If all conditions pass, it is a valid word
    return true;
}

console.log(countValidWords(sentence = "he bought 2 pencils, 3 erasers, and 1  pencil-sharpener."));