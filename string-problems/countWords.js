
/**
 * 
 * @param {Array} words1 
 * @param {Array} words2 
 */
const countWords = (words1,words2) => {
    let frequencyMap = {};
    let finalCount = 0;

    for(let word of words1) {
        frequencyMap[word] = !frequencyMap[word] ? 1 : -1;
    }

    for(let word of words2) {
        frequencyMap[word]--;
    }

    for(let count in frequencyMap) {
        if(frequencyMap[count] === 0) {
            finalCount++;
        }
    }
    return finalCount;
}

console.log(countWords(words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"])); 