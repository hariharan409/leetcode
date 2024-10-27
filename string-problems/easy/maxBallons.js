
/**
 * 
 * @param {String} text 
 */
const maxBallons = (text) => {
    let frequencyMap = {};
    let count = 0;
    for(let i=0;i<text.length;i++) {
        frequencyMap[text[i]] = (frequencyMap[text[i]] || 0) + 1;
    }

    while(true) {
        if(frequencyMap["b"] >= 1 && frequencyMap["a"] >= 1 && frequencyMap["l"] >= 2 && frequencyMap["o"] >= 2 && frequencyMap["n"] >= 1) {
            count++;
            frequencyMap["b"] -= 1;
            frequencyMap["a"] -= 1;
            frequencyMap["l"] -= 2;
            frequencyMap["o"] -= 2;
            frequencyMap["n"] -= 1;
            continue;
        }
        return count;
    }
}

console.log(maxBallons(text = "loonbalxballpoon"));