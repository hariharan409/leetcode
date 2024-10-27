

/**
 * 
 * @param {Array} words 
 */
const stringMatching = (words) => {
    let subStrArr = [];

    for(let i=0;i<words.length - 1;i++) {
        for(let j=i+1;j<words.length;j++) {
            if(words[i].includes(words[j]) && !(subStrArr.includes(words[j]))) {
                subStrArr.push(words[j]);
            } else if(words[j].includes(words[i]) && !(subStrArr.includes(words[i]))) {
                subStrArr.push(words[i]);
            }
        }
    }
    return subStrArr;
}

console.log(stringMatching(words = ["mass","as","hero","superhero"]));