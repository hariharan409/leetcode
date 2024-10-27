
/**
 * 
 * @param {String} s 
 */
const makeSmallestPalindrome = (s) => {
    let sArr = s.split("");
    let leftIndex = 0;
    let rightIndex = sArr.length - 1;

    while(leftIndex < rightIndex) {
        if(sArr[leftIndex] !== sArr[rightIndex]) {
            let minChar = sArr[leftIndex].charCodeAt(0) < sArr[rightIndex].charCodeAt(0) ? sArr[leftIndex] : sArr[rightIndex];
            sArr[leftIndex] = minChar;
            sArr[rightIndex] = minChar;
        }
        leftIndex++;
        rightIndex--;
    }
    return sArr.join("");
}

console.log(makeSmallestPalindrome(s = "egcfe"));