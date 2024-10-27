
/**
 * 
 * @param {String} s 
 */
const countGoodSubstrings = (s) => {
    let count = 0;
    for(let i=0;i<s.length;i++) {
        if(s[i+2] !== undefined) {
            let subStr = s.slice(i,i+3);
            let uniqueStr = new Set(subStr);
            if(subStr.length === uniqueStr.size) {
                count++;
            }
        }
    }
    return count;
}

console.log(countGoodSubstrings(s = "xyzzaz"));