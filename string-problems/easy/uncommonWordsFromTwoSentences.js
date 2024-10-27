

/**
 * 
 * @param {String} s1
 * @param {String} s2
 */
const uncommonWordsFromTwoSentences = (s1,s2) => {
    let frequencyObj = {};
    let s1Arr = s1.split(" ");
    let s2Arr = s2.split(" ");

    for(let word of [...s1Arr,...s2Arr]) {
        frequencyObj[word] = (frequencyObj[word] || 0) + 1;
    }

    return Object.keys(frequencyObj).filter((word) => frequencyObj[word] === 1);
}

console.log(uncommonWordsFromTwoSentences(s1 = "this apple is sweet", s2 = "this apple is sour"));