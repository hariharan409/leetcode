
/**
 * 
 * @param {String} key 
 * @param {String} message 
 */
const decodeMessage = (key,message) => {
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let uniqueSet = new Set(key.replaceAll(" ",""));
    let tempObj = {};

    let i=0;
    for(let char of uniqueSet) {
        tempObj[char] = alphabets[i];
        i++;
    }
    let finalStr = "";
    for(let char of message) {
        if(char === " ") {
            finalStr += char;
        } else {
            finalStr += tempObj[char];
        }
    }
    return finalStr;
}

console.log(decodeMessage(key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"));