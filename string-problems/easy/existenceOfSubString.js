
/**
 * @param {string} originalStr
 * @return {boolean}
 */
const existenceOfSubString = (originalStr) => {
    let reversedStr = originalStr.split("").reverse().join("");
    let currentIndex = 0;
    let nextIndex = 1;
    while(currentIndex < originalStr.length - 1) {
        let subString = originalStr[currentIndex]+originalStr[nextIndex];
        if(reversedStr.includes(subString)) {
            return true;
        }
        currentIndex++;
        nextIndex++;
    }
    return false;
}

console.log(existenceOfSubString("leetcode"));