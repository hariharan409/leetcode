
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = (paragraph,banned) => {
    /* USE HASH TABLE */
    let wordObj = {};
    const regex = /[^a-zA-Z0-9]+/g;
    let tempArr = paragraph.split(/[ ,]/).filter((word) => !banned.includes(word.replace(regex,"").toLowerCase())).map((word) => {
        let tempWord = word.replace(regex,"").toLowerCase();
        return tempWord;
    });
    for(let word of tempArr) {
        if(word) {
            wordObj[word] = (wordObj[word] || 0) + 1;
        }
    }
    let mostCommonWord = "";
    let mostCommonWordCount = 0;
    Object.keys(wordObj).forEach((word) => {
        if(wordObj[word] > mostCommonWordCount) {
            mostCommonWord = word;
            mostCommonWordCount = wordObj[word];
        }
    });
    return mostCommonWord;
}

console.log(mostCommonWord(paragraph = "a, a, a, a, b,b,b,c, c", banned = ["a"]));