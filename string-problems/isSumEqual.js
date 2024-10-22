
/**
 * 
 * @param {String} firstWord 
 * @param {String} secondWord 
 * @param {String} targetWord 
 */
const isSumEqual = (firstWord,secondWord,targetWord) => {
    let indices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let firstWordCount  = "";
    let secondWordCount = "";
    let targetWordCount = "";

    for(let char of firstWord) {
        firstWordCount += indices.indexOf(char);
    }

    for(let char of secondWord) {
        secondWordCount += indices.indexOf(char);
    }

    for(let char of targetWord) {
        targetWordCount += indices.indexOf(char);
    }

    return parseInt(firstWordCount) + parseInt(secondWordCount) === parseInt(targetWordCount);
}

console.log(isSumEqual(firstWord = "acb", secondWord = "cba", targetWord = "cdb"));