
/**
 * 
 * @param {String} s 
 */
const maxDifference = (s) => {
    let maxOddFreq = Number.NEGATIVE_INFINITY;
    let minEvenFreq = Number.POSITIVE_INFINITY;
    let freqMap = {};

    for(let char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    for(let char in freqMap) {
        let tempCount = freqMap[char];
        if(tempCount % 2 === 0) {
            minEvenFreq = Math.min(minEvenFreq,tempCount);
        } else {
            maxOddFreq = Math.max(maxOddFreq,tempCount);
        }
    }

    let maxDiff = maxOddFreq - minEvenFreq;
    return maxDiff;
}

console.log(maxDifference(s = "abcabcab"));