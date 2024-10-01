/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (originalArray) => {
    let tempString = "";
    let tempIndex = 0;
    /* FIRST INDEX STRING LENGTH WOULD BE THE COMMON STRING REFERENCE */
    let refStringLength = originalArray[0].length;
    while(tempIndex < refStringLength) {
        let currentStringIndexRef = originalArray[0][tempIndex];
        for(let i=0;i<originalArray.length;i++) {
            if(originalArray[i][tempIndex] !== currentStringIndexRef) {
                return tempString;
            }
        }
        tempString += currentStringIndexRef;
        tempIndex++;
    }
    return tempString;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));








console.log(longestCommonPrefix(["flower","flow","flight"]));