
/**
 * 
 * @param {String} s 
 * @param {String} t 
 */
const backspaceStringCompare = (s,t) => {
    return buildFinalString(s) === buildFinalString(t);
}

const buildFinalString = (str) => {
    let result = [];
    for(let char of str) {
        if(char === "#") {
            result.pop();
        } else {
            result.push(char);
        }
    }
    return result.join("");
}

console.log(backspaceStringCompare(s = "ab##", t = "c#d#"));