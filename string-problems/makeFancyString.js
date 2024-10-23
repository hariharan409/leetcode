
/**
 * 
 * @param {String} s 
 */
const makeFancyString = (s) => {
    let reference = {
        char: s[0],
        count: 1
    }
    let finalStr = s[0];

    for(let i=1;i<s.length;i++) {
        if(reference.char === s[i]) {
            reference.count++;
            if(reference.count < 3) {
                finalStr += s[i];
            }
        } else {
            finalStr += s[i];
            reference = {
                char: s[i],
                count: 1
            }
        }
    }
    return finalStr;
}

console.log(makeFancyString(s = "leeetcode"));