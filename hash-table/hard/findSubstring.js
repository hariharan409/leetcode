
/**
 * 
 * @param {String} s 
 * @param {Array} words 
 */
const findSubstring = (s,words) => {
    let indexList = [];
    let frequencyMap = new Map();

    const resetMapValue = () => {
        for(let word of words) {
            frequencyMap.set(word,frequencyMap.get(word) + 1 || 1);
        }
    }

    const wordLength = words[0].length;

    let sArr = s.match(new RegExp(`.{1,${wordLength}}`,'g'));
    resetMapValue();
    let refIndex = 0;
    for(let i=0;i<sArr.length;i++) {
        if(frequencyMap.has(sArr[i]) && frequencyMap.get(sArr[i]) > 0) {
            frequencyMap.set(sArr[i],frequencyMap.get(sArr[i]) - 1);
        } else if(frequencyMap.get(sArr[i]) === 0) {

        } else {
            resetMapValue();
            if(refIndex < i) {
                indexList.push((i * wordLength) + 1);
            }
        }
    }
    return indexList;
}

console.log(findSubstring(s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]));