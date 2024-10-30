
/**
 * 
 * @param {String} s 
 */
const longestPalindrome = (s) => {
    if (s.length < 2) return s; // A single character is already a palindrome

    let start = 0;
    let maxLength = 1;

    function expandAroundCenter(left, right) {
        // Expand around the center while the characters match
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Update the start and maxLength if a longer palindrome is found
        if (right - left - 1 > maxLength) {
            start = left + 1;
            maxLength = right - left - 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);     // Odd-length palindromes
        expandAroundCenter(i, i + 1); // Even-length palindromes
    }

    return s.substring(start, start + maxLength);
}

console.log(longestPalindrome(s = "aacabdkacaa"));