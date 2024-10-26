
/**
 * 
 * @param {Array} words 
 * @param {String} separator 
 */
const splitWordsBySeparator = (words,separator) => {
    let splittedArr = [];
    for(let i=0;i<words.length;i++) {
        let splittedWord = words[i].split(separator).filter((word) => word);
        splittedArr.push(...splittedWord);
    }
    return splittedArr;
}

console.log(splitWordsBySeparator(words = ["$easy$","$problem$"], separator = "$"));