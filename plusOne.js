
/**
 * @param {number[]} digitsList
 * @return {number[]}
 */
const plusOne = (digitsList) => {
    for(let i=digitsList.length-1;i>=0;i--) {
        if(digitsList[i] < 9) {
            digitsList[i]++;
            return digitsList;
        }
        digitsList[i] = 0; // Set current digit to 0 and continue to propagate the carry
    }
    // If we exit the loop, that means all digits were 9, so we need to add an additional 1 at the beginning
    digitsList.unshift(1);
    return digitsList;
}

console.log(plusOne([1,2,3]));