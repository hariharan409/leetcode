
/**
 * 
 * @param {String} s 
 */
const replaceDigits = (s) => {
    if(s.length <= 1) return s;
    let finalStr = "";
    for(let i=1;i<s.length;i=i+2) {
        let newChar = shift(s[i-1],parseInt(s[i]));
        finalStr += newChar;

        if(s[i+2] === undefined) {
            finalStr += s.slice(i+1);
        }
    }
    return finalStr;
}

/**
 * 
 * @param {String} c 
 * @param {Number} x 
 */
const shift = (c,x) => {
    let charCode = c.charCodeAt(0);
    let newChar = String.fromCharCode(charCode+x);
    return c+newChar; 
}

console.log(replaceDigits(s = "a1b2c3d4e"));