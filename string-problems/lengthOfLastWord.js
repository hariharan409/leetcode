
/**
 * @param {string} originalStr
 * @return {number}
 */
const lengthOfLastWord = (originalStr) => {
    let tempArray = originalStr.trim().split(" ");
    if(tempArray.length === 0) return 0;
    return tempArray[tempArray.length - 1].length;
}

console.log(lengthOfLastWord("Hello World        "));