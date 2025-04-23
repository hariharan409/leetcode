
/**
 * 
 * @param {String} s 
 */
const hasSameDigits = (s) => {

    while(s.length > 2) {
        let newStr = "";
        for(let i=1;i<s.length;i++) {
            let sum = ((parseInt(s[i]) + parseInt(s[i-1])) % 10);
            newStr += sum.toString();
        }
        s = newStr;
    }

    return s[0] === s[1];
}

console.log(hasSameDigits(s="3902"));