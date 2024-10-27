
/**
 * 
 * @param {Array} words 
 * @param {String} s 
 */
const isAcronym = (words,s) => {
    let tempStr = "";

    for(let word of words) {
        tempStr += word[0];
    }
    return tempStr === s;
}

console.log(isAcronym(words = ["alice","bob","charlie"], s = "abc"));