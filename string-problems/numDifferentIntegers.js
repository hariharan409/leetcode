
/**
 * 
 * @param {String} word 
 */
const numDifferentIntegers = (word) => {
    let wordArr = [];
    let regex = /[0-9]/g;
    let tempWord = "";

    for(let char of word) {
        if(char.match(regex)) {
            tempWord += char;
        } else if(tempWord.length > 0) {
            wordArr.push(BigInt(tempWord));
            tempWord = "";
        }
    }

    if(tempWord.length > 0) {
        wordArr.push(BigInt(tempWord));
    }

    return new Set(wordArr).size;
}

console.log(numDifferentIntegers(word = "a123bc34d8ef34"));