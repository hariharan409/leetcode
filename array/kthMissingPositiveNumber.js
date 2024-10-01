
/**
 * @param {number[]} originalArr
 * @param {number} k
 * @return {number}
 */
const kthMissingPositiveNumber = (originalArr,k) => {
    let missingPositiveIntArr = [];
    let missingCount = 0;
    let currentValue = 1;
    while(missingCount < k) {
        if(!originalArr.includes(currentValue)) {
            missingPositiveIntArr.push(currentValue);
            missingCount++;
        }
        currentValue++;
    }
    return missingPositiveIntArr[missingCount - 1];
}

console.log(kthMissingPositiveNumber(originalArr = [2,3,4,7,11], k = 5));