
/**
 * 
 * @param {String} s 
 * @returns 
 */
const getSmallestString = (s) => {
    const arr = s.split(''); // Convert string to array
    let minString = s; // Start with the original string as the minimum

    for (let i = 0; i < arr.length - 1; i++) {
        // Check if arr[i] and arr[i + 1] have the same parity
        if ((arr[i] % 2) === (arr[i + 1] % 2)) {
            // Swap them
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            const newString = arr.join(''); // Create new string after swap

            // Update minString if the new string is lexicographically smaller
            if (newString < minString) {
                minString = newString;
            }

            // Swap back to maintain original order for further checks
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    return minString; // Return the smallest string found
}

// Example usage
console.log(smallestStringAfterSwap("45320")); // Output: "43520"
console.log(smallestStringAfterSwap("001"));