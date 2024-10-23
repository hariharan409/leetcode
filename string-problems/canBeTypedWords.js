
/**
 * 
 * @param {String} text 
 * @param {String} brokenLetters 
 * @returns 
 */
const canBeTypedWords = (text,brokenLetters) => {
    let count = 0;
    let textArr = text.split(" ");

    for(let word of textArr) {
        let isBroken = false;
        for(let char of brokenLetters) {
            if(word.includes(char)) {
                isBroken = true;
                break;
            }
        }
        !isBroken && count++;
    }
    return count;
}

console.log(canBeTypedWords(text = "hello world", brokenLetters = "ad"));