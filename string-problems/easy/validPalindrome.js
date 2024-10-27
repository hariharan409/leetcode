// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.
/**
 * @param {string} originalStr
 * @return {boolean}
 */
const validPalindrome = (originalStr) => {
    // Removes anything that's not a letter or digit
    const expression = /[^A-Za-z0-9]+/g;
    let sanitizeStr = originalStr.toLowerCase().replace(expression,"");
    let reversedStr = sanitizeStr.split("").reverse().join("");
    if(sanitizeStr === reversedStr) {
        return true;
    }
    return false;
}

console.log(validPalindrome("A man, a plan, a canal: Panama"));