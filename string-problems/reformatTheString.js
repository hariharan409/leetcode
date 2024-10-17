/**
 * Reformat the input string by alternating between letters and digits.
 * If it's not possible to do so, return an empty string.
 * 
 * @param {String} s 
 * @returns {String} Reformatted string or empty string
 */
const reformatTheString = (s) => {
    let alphabets = [];
    let numbers = [];

    // Separate alphabets and numbers
    for (let char of s) {
        if (/[a-zA-Z]/.test(char)) {
            alphabets.push(char);
        } else {
            numbers.push(char);
        }
    }

    // If the difference between the lengths is more than 1, reformatting isn't possible
    if (Math.abs(alphabets.length - numbers.length) > 1) {
        return "";
    }

    let finalStr = "";

    // Correctly assign larger and smaller arrays
    let largerArray, smallerArray;
    if (numbers.length > alphabets.length) {
        largerArray = numbers;
        smallerArray = alphabets;
    } else {
        largerArray = alphabets;
        smallerArray = numbers;
    }

    // Interleave the characters
    while (largerArray.length > 0 || smallerArray.length > 0) {
        if (largerArray.length > 0) {
            finalStr += largerArray.shift();
        }
        if (smallerArray.length > 0) {
            finalStr += smallerArray.shift();
        }
    }

    return finalStr;
}

console.log(reformatTheString("covid2019")); // Example usage


console.log(reformatTheString(s="covid2019"));