
/**
 * 
 * @param {String} s 
 */
const reverseWords = (s) => {
    let sArr = s.replace(/\s+/g, " ").trim().split(" ");
    let leftIndex = 0;
    let rightIndex = sArr.length - 1;
    while(leftIndex < rightIndex) {
        let temp = sArr[leftIndex];
        sArr[leftIndex] = sArr[rightIndex];
        sArr[rightIndex] = temp;

        leftIndex++;
        rightIndex--;
    }
    return sArr.join(" ");
}

console.log(reverseWords(s = "  hello world  "));