/**
 * @param {number} x
 * @return {boolean}
 */
/* TIME COMPLEXITY O(n) */

// const isPalindrome = (x) => {
//     let originalString = x.toString();
//     let reversedString = "";
//     for(let i=originalString.length - 1;i>=0;i--) {
//         reversedString += originalString[i];
//     }
//     if(originalString === reversedString) {
//         return true;
//     }
//     return false;
// }

/* ------------------------------------------------------------------------------------------------------------------------------ */


// This is the best time complexity you can achieve for checking if a string is a palindrome, 
// since you need to look at every character at least once to make the comparison. 
// The function processes each character only once (or twice, depending on perspective, but still linear in nature), 
// which is optimal for this problem.
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    let originalString = x.toString();
    let startIndex = 0;
    let endIndex = originalString.length - 1;
    while(startIndex <= endIndex) {
        if(originalString[startIndex] !== originalString[endIndex]) {
            return false;
        }
        startIndex++;
        endIndex--;
    }
    return true;
}



console.log(isPalindrome(121));

