
/**
 * 
 * @param {String} s 
 */
const longestPalindrome = (s) => {
    let frequencyObj = {};
    let evenCount = 0;
    let isOddFound = 0;

    for(let char of s) {
        frequencyObj[char] = (frequencyObj[char] || 0) + 1;
    }
    for(let key in frequencyObj) {
        if(frequencyObj[key] % 2 === 0) {
            evenCount += frequencyObj[key];
        }
        if(frequencyObj[key] % 2 !== 0) {
            evenCount += (frequencyObj[key] - 1);
            isOddFound = 1;
        }
    }
    return evenCount + isOddFound;
}

console.log(longestPalindrome(s = "bananas"));