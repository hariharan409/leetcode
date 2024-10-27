
/**
 * 
 * @param {String} word 
 */
const isValid = (word) => {
    // Check if the word has at least 3 characters
    if (word.length < 3) return false;
    
    // Check if the word contains only valid characters (letters and digits)
    if (!/^[0-9A-Za-z]+$/.test(word)) return false;

    // Check for at least one vowel
    if (!/[aeiou]/i.test(word)) return false;

    // Check for at least one consonant
    if (!/[bcdfghjklmnpqrstvwxyz]/i.test(word)) return false;

    return true;

}

console.log(isValid(word = "234Adas"));