
/**
 * 
 * @param {String} s 
 */
const consecutiveChar = (s) => {
    let maxPower = 1;
    let tempCount = 1;
    for(let i=0;i<s.length;i++) {
        if(s[i] === s[i+1]) {
            tempCount++;
            continue;
        }
        maxPower = Math.max(maxPower,tempCount);
        tempCount = 1;
    }
    return maxPower;
}

console.log(consecutiveChar(s = "leetcode"));