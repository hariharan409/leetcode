
/**
 * 
 * @param {String} s 
 */
const positionOfLargeGroups = (s) => {
    let largeGroup = [];
    //A group is considered large if it has 3 or more characters.
    let startIndex = 0;
    for(let i=1;i<s.length;i++) {
        if(s[i] !== s[startIndex]) {
            if(Math.abs(startIndex - i) >= 3) {
                largeGroup.push([startIndex,i-1]);
            }
            startIndex = i;
        }
    }

    // Final check for the last group
    if (s.length - startIndex >= 3) {
        largeGroup.push([startIndex, s.length - 1]);
    }
    return largeGroup;
}

console.log(positionOfLargeGroups(s = "aaa"));