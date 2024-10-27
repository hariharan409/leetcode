
/**
 * 
 * @param {String} s 
 */
const countKeyChanges = (s) => {
    let count = 0;
    for(let i=1;i<s.length;i++) {
        if(s[i-1].toLowerCase() !== s[i].toLowerCase()) {
            count++;
        }
    }
    return count;
}

console.log(countKeyChanges(s = "aAbBcC")); 