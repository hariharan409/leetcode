
/**
 * 
 * @param {String} s 
 * @param {Number} k 
 */
const countKConstraintSubstrings = (s,k) => {
    let count = 0;

    for(let i=0;i<s.length;i++) {
        let zeroCount = 0;
        let oneCount = 0;
        for(let j=i;j<s.length;j++) {
            // Count the current character
            if (s[j] === '0') {
                zeroCount++;
            } else if (s[j] === '1') {
                oneCount++;
            }

            if(zeroCount <= k || oneCount <= k) {
                count++;
            }
        }
    }
    return count;
}

console.log(countKConstraintSubstrings(s = "10101", k = 1));