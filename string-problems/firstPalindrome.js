
/**
 * 
 * @param {Array} words 
 */
const firstPalindrome = (words) => {
    for(let word of words) {
        let reversedWord = word.split("").reverse().join("");
        if(word === reversedWord) {
            return word;
        }
    }
    return "";
}

console.log(firstPalindrome(words = ["abc","car","ada","racecar","cool"]));