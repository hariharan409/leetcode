
/**
 * 
 * @param {String} s 
 */
const myAtoi = (s) => {
    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;
    s = s.trimStart();
    let finalStr = "";
    let isSignFound = false;

    if(s[0] === "+" || s[0] === "-") {
        finalStr += s[0];
        isSignFound = true;
    }

    for(let i=(isSignFound ? 1 : 0);i<s.length;i++) {
        if(s[i] === 0 && !(/[1-9]/.test(finalStr))) continue;
        if(/[0-9]/.test(s[i])) {
            finalStr += s[i]
        }
        if(/[a-zA-Z-+ .]/.test(s[i])) break;
    }

    return !(/[0-9]/.test(finalStr)) ? 0 : parseInt(finalStr) > INT_MAX ? INT_MAX : parseInt(finalStr) < INT_MIN ? INT_MIN : parseInt(finalStr);    
}

console.log(myAtoi(s = "    +0 123"));