
/**
 * 
 * @param {String} s 
 */
const validPalindrome2 = (s) => {
        // Helper function to check if a substring is a palindrome
        function isPalindrome(left, right) {
            while (left < right) {
                if (s[left] !== s[right]) {
                    return false;
                }
                left++;
                right--;
            }
            return true;
        }
        
        let left = 0;
        let right = s.length - 1;
        
        while (left < right) {
            if (s[left] !== s[right]) {
                // Try skipping either the left or right character
                return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
            }
            left++;
            right--;
        }
        
        return true; // The string is already a palindrome
}

console.log(validPalindrome2(s="deeee"));