
/**
 * 
 * @param {String} s 
 */
const findValidPair = (s) => {
    let freqMap = {};

    for(let char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    for(let i=1;i<s.length;i++) {
        let prevFreq = freqMap[s[i-1]];
        let prevVal  = s[i-1];
        let currFreq = freqMap[s[i]];
        let currVal  = s[i];

        if((s[i-1] !== s[i]) && (prevFreq == prevVal) && (currFreq == currVal)) {
            return s[i-1]+s[i];
        }
    }
    return "";
}

console.log(findValidPair(s = "2523533"));