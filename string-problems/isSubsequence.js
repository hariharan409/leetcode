
/**
 * 
 * @param {String} s 
 * @param {String} t 
 */
const isSubsequence = (s,t) => {
    let sIndex = 0;
    let tIndex = 0;

    while (sIndex < s.length && tIndex < t.length) {
        if (s[sIndex] === t[tIndex]) {
            sIndex++; // Move to the next character in s
        }
        tIndex++; // Always move to the next character in t
    }
    return sIndex === s.length; // Check if we reached the end of s
}

console.log(isSubsequence(s = "abc", t = "ahbgdc"));