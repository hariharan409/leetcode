
/**
 * @param {string} originalStr
 * @return {string}
 */
const reverseOnlyLetters = (originalStr) => {
    let originalArray = originalStr.split("");
    let leftIndex = 0;
    let rightIndex = originalStr.length -  1;
    let englishLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    while(leftIndex < rightIndex) {
        if(!englishLetters.includes(originalArray[leftIndex])) {
            leftIndex++;
            continue;
        }
        if(!englishLetters.includes(originalArray[rightIndex])) {
            rightIndex--;
            continue;
        }
        let temp = originalArray[leftIndex];
        originalArray[leftIndex] = originalArray[rightIndex];
        originalArray[rightIndex] = temp;

        leftIndex++;
        rightIndex--;
    }
    return originalArray.join("");
}

console.log(reverseOnlyLetters("ab-cd"));