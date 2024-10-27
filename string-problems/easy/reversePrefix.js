
/**
 * 
 * @param {String} word 
 * @param {String} ch 
 */
const reversePrefix = (word,ch) => {
    let wordArr = word.split("");
    let index = wordArr.indexOf(ch);
    if(index !== -1) {
        return wordArr.slice(0,index + 1).reverse().concat(wordArr.slice(index+1)).join(""); 
    } else {
        return wordArr.join("");
    }
}

console.log(reversePrefix(word = "abcdefd", ch = "d"));