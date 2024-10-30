
/**
 * 
 * @param {String} s 
 */
const lengthOfLongestSubstring = (s) => {
    let long = 0;

    for(let i=0;i<s.length;i++) {
        let tempSubStr = "";
        for(let j=i;j<s.length;j++) {
            if(!tempSubStr.includes(s[j])) {
                tempSubStr += s[j];
            } else {
                long = Math.max(long,tempSubStr.length);
                break;
            }
        }
        long = Math.max(long,tempSubStr.length);
    }
    return long;
}

console.log(lengthOfLongestSubstring(s = "au"));