
/**
 * 
 * @param {String} sentence 
 */
const checkIfPangram = (sentence) => {
    let uniqueVal = [...new Set(sentence)].sort().join("");
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    
    return uniqueVal === alphabets;
}

console.log(checkIfPangram(sentence = "thequickbrownfoxjumpsoverthelazydog"));