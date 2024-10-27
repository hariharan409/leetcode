/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let left = 0; // Left pointer for the sliding window
    let maxLength = 0; // Variable to track the maximum length
    const charCount = {}; // Object to keep track of character counts

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        
        // Increment the count of the current character
        if (!charCount[char]) {
            charCount[char] = 0;
        }
        charCount[char]++;

        // While any character count exceeds 2, shrink the window from the left
        while (charCount[char] > 2) {
            charCount[s[left]]--;
            if (charCount[s[left]] === 0) {
                delete charCount[s[left]]; // Remove the character from the object if its count is 0
            }
            left++; // Move the left pointer to the right
        }

        // Update the maximum length found so far
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};