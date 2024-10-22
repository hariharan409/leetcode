/**
 * Helper function to determine if a substring is "nice"
 * @param {String} str 
 * @returns {Boolean}
 */
const isNice = (str) => {
    const charSet = new Set(str);
    for (let char of str) {
        if (!charSet.has(char.toLowerCase()) || !charSet.has(char.toUpperCase())) {
            return false;
        }
    }
    return true;
}

/**
 * Main function to find the longest nice substring
 * @param {String} s 
 * @returns {String}
 */
const longestNiceSubstring = (s) => {
    let maxLength = 0;
    let longestNice = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const currentSubstring = s.slice(i, j);
            if (isNice(currentSubstring) && currentSubstring.length > maxLength) {
                maxLength = currentSubstring.length;
                longestNice = currentSubstring;
            }
        }
    }

    return longestNice;
}

console.log(longestNiceSubstring(s = "YazaAay"));