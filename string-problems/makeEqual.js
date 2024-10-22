
/**
 * 
 * @param {Array} words 
 */
const makeEqual = (words) => {
    let frequencyObj = {};

    for(let word of words) {
        for(char of word) {
            frequencyObj[char] = (frequencyObj[char] || 0) + 1;
        }
    }

    for(let frequency in frequencyObj) {
        if((frequencyObj[frequency] % words.length !== 0)) {
            return false;
        }
    }

    return true;
}

console.log(makeEqual(words = ["abc","aabc","bc"]));