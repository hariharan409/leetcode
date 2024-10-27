
/**
 * 
 * @param {Array} words 
 * @param {String} x 
 */
const findWordsContaining = (words,x) => {
    let indexList = [];

    for(let i=0;i<words.length;i++) {
        if(words[i].includes(x)) {
            indexList.push(i);
        }
    }
    return indexList;
}

console.log(findWordsContaining(words = ["leet","code"], x = "e"));