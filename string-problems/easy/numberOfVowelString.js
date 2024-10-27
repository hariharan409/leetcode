
/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const numberOfVowelString = (words,left,right) => {
    let vowelStringCount = 0;
    let vowelsRegex = /[aeiou]/g;
    for(let i=left;i<=right;i++) {
        if(words[i][0].match(vowelsRegex) && words[i][words[i].length - 1].match(vowelsRegex)) {
            vowelStringCount++;
        }
    }
    return vowelStringCount;
}

console.log(numberOfVowelString(words = ["hey","aeo","mu","ooo","artro"], left = 1, right = 4));