
/**
 * 
 * @param {String} sentence 
 * @param {String} searchWord 
 */
const checkWordOccursAsPrefix = (sentence,searchWord) => {
    let sentenceArr = sentence.split(" ");

    for(let i=0;i<sentenceArr.length;i++) {
        if(sentenceArr[i].startsWith(searchWord)) {
            return i+1;
        }
    }
    return -1;
}

console.log(checkWordOccursAsPrefix(sentence = "i love eating burger", searchWord = "burg"));