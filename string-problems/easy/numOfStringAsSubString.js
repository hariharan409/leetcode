
/**
 * 
 * @param {Array} patterns 
 * @param {String} word 
 */
const numOfStringAsSubString = (patterns,word) => {
    let count = 0;

    for(let pattern of patterns) {
        if(word.includes(pattern)) {
            count++;
        }
    }

    return count;
}

console.log(numOfStringAsSubString(patterns = ["a","abc","bc","d"], word = "abc"));