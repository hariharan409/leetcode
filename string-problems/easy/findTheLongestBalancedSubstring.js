
/**
 * 
 * @param {String} s 
 */
const findTheLongestBalancedSubstring = (s) => {
    let longestCount  = 0;
    let startingIndex = s.indexOf("0");
    let tempZeroCount = 0;
    let tempOneCount  = 0;

    const resetCounts = () => {
        tempZeroCount = 0;
        tempOneCount = 0;
    }
 
    for(let i=startingIndex;i<s.length;i++) {
        if(tempOneCount > 0 && s[i] === "0") {
            longestCount = Math.max(longestCount,(Math.min(tempZeroCount,tempOneCount) * 2));
            resetCounts();
        }
        s[i] === "0" ? tempZeroCount++ : tempOneCount++;
    }
    if(tempZeroCount > 0 && tempOneCount > 0) {
        longestCount = Math.max(longestCount,(Math.min(tempZeroCount,tempOneCount) * 2));
    }
    return longestCount;
}

console.log(findTheLongestBalancedSubstring(s = "01000111"));