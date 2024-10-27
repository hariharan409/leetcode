
/**
 * 
 * @param {String} text 
 */
const rearrangeSpacedBetweenWords = (text) => {
    let finalStr        = "";
    let spaceLength     = text.split("").filter((char) => char === " ").length;
    let wordList        = text.split(" ").filter((char) => char !== "");
    let equalSpaces     = wordList.length - 1 !== 0 ? Math.floor(spaceLength / (wordList.length - 1)) : 0;
    let remainingSpace  = wordList.length - 1 !== 0 ? spaceLength % (wordList.length - 1) : spaceLength;

    for(let i=0;i<wordList.length;i++) {
        finalStr += wordList[i];
        if(i !== (wordList.length - 1)) {
            finalStr += " ".repeat(equalSpaces);
        } else {
            finalStr += " ".repeat(remainingSpace);
        }
    }
    return finalStr;
}

console.log(rearrangeSpacedBetweenWords(text = "  hello"));