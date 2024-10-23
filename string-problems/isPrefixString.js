
/**
 * 
 * @param {String} s 
 * @param {Array} words 
 */
const isPrefixString = (s,words) => {
    let finalStr = "";
    for(let word of words) {
        finalStr += word;
        if(s === finalStr) {
            return true;
        }
    }
    return false;
}

console.log(isPrefixString(s = "ileetcode", words = ["i","love","leetcode","apples"]));