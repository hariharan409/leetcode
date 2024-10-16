
/**
 * 
 * @param {Array} words 
 * @param {String} chars 
 */
const findWordsCanFormedByChar = (words,chars) => {
    let goodStrCount = 0;
    const charFrequencyMap = getCharFrequencyMap(chars);

    for(let word of words) {
        const wordFrequencyMap = getCharFrequencyMap(word);
        let canForm = true;
        // Check if the word can be formed with the characters in 'chars'
        for(let char of word) {
            if(!charFrequencyMap[char] || wordFrequencyMap[char] > charFrequencyMap[char]) {
                canForm = false;
            }
        }
        // If the word can be formed, add its length to the total count
        if(canForm) {
            goodStrCount += word.length;
        }
    }
    return goodStrCount;
}

// Create a frequency map for the characters in 'chars'
const getCharFrequencyMap = (str) => {
    let map = {};
    for(let i=0;i<str.length;i++) {
        map[str[i]] = (map[str[i]] || 0) + 1;
    }
    return map;
}

console.log(findWordsCanFormedByChar(words = ["cat","bt","hat","tree"], chars = "atach"));