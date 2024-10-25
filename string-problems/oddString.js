
/**
 * 
 * @param {String} words 
 */
const oddString = (words) => {
    let frequencyMap = {};

    for(let word of words) {
        let tempArr = [];
        for(let i=1;i<word.length;i++) {
            let difference = word[i].charCodeAt(0) - word[i-1].charCodeAt(0);
            tempArr.push(difference);
        }
        let temp = tempArr.join("");
        if(frequencyMap[temp]) {
            frequencyMap[temp].count++;
            continue;
        }
        frequencyMap[temp] = {
            name: word,
            count: 1
        };
    }

    for(let key in frequencyMap) {
        if(frequencyMap[key].count === 1) {
            return frequencyMap[key].name
        }
    }
}

console.log(oddString(words = ["abm","bcn","alm"]));