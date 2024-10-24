
/**
 * 
 * @param {String} s 
 */
const repeatedCharacter = (s) => {
    let frequencyMap = {};

    for(let char of s) {
        if(!frequencyMap[char]) {
            frequencyMap[char] = (frequencyMap[char] || 0) + 1;
        } else {
            return char;
        }
    }
}

console.log(repeatedCharacter(s= "abccbaacz"));