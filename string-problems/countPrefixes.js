
/**
 * 
 * @param {Array} words 
 * @param {String} s 
 */
const countPrefixes = (words,s) => {
    let count = 0;

    for(let word of words) {
        if(s.startsWith(word)) {
            count++;
        }
    }
    return count;
}

console.log(countPrefixes(words = ["a","b","c","ab","bc","abc"], s = "abc"));