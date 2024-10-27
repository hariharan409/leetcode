
/**
 * 
 * @param {String} s1 
 * @param {String} s2 
 * @param {String} s3 
 */
const findMinimumOperations = (s1,s2,s3) => {
    let prefix = "";
    for(let i=0;i<s1.length;i++) {
        if(s1[i] === s2[i] && s2[i] === s3[i]) {
            prefix += s1[i];
        } else {
            break;
        }
    }

    if(!prefix) return -1;

    let removalStr = s1.slice(prefix.length) + s2.slice(prefix.length) + s3.slice(prefix.length);
    return removalStr.length;
}

console.log(findMinimumOperations(s1 = "abc", s2 = "abb", s3 = "ab"));