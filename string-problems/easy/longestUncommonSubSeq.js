
/**
 * 
 * @param {String} a 
 * @param {String} b 
 */
const longestUncommonSubSeq = (a,b) => {
    if(a === b) return -1;
    return Math.max(a.length,b.length);
}

console.log(longestUncommonSubSeq(a = "aba", b = "cdc"));