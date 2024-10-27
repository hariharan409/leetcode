
/**
 * 
 * @param {String} s 
 */
const scoreOfString = (s) => {
    let sum = 0;
    for(let i= 1;i<s.length;i++) {
        sum += (Math.abs(s[i].charCodeAt(0) - s[i-1].charCodeAt(0)));
    }
    return sum;
}

console.log(scoreOfString(s = "hello"));

