
/**
 * 
 * @param {Array} words 
 */
const removeAnagrams = (words) => {
    let i=1;
    while(i < words.length) {
        let currentStr = words[i].split("").sort().join("");
        let previousStr = words[i-1].split("").sort().join("");
        if(currentStr === previousStr) {
            words.splice(i,1);
        } else {
            i++;
        }
    } 
    return words;
}

console.log(removeAnagrams(words = ["abba","baba","bbaa","cd","cd"]));