
/**
 * 
 * @param {String} s 
 */
const areOccurrencesEqual = (s) => {
    const frequencyObj = {};

    for(let char of s) {
        frequencyObj[char] = (frequencyObj[char] || 0) + 1;
    }

    // Get the frequency of the first character
    let frequencyValues = Object.values(frequencyObj);
    let firstFrequency = frequencyValues[0];

    for(let frequency of frequencyValues) {
        if(frequency !== firstFrequency) {
            return false;
        }
    }
    return true;
}

console.log(areOccurrencesEqual(s = "abcabcc"));