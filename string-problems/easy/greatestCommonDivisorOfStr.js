
/**
 * 
 * @param {String} str1 
 * @param {String} str2 
 */
const greatestCommonDivisorOfStr = (str1,str2) => {
    // Helper function to calculate the GCD of two numbers
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    
    // Get the greatest common divisor of the lengths of the two strings
    const gcdLength = gcd(str1.length, str2.length);
    
    // Get the possible common divisor string
    const candidate = str1.substring(0, gcdLength);
    
    // Check if both str1 and str2 can be constructed by repeating the candidate string
    if (str1.split(candidate).join('') === '' && str2.split(candidate).join('') === '') {
        return candidate;
    }
    
    return "";
}

console.log(greatestCommonDivisorOfStr(str1 = "ABCDEF", str2 = "ABC"));