
/**
 * 
 * @param {String} s 
 */
const clearDigits = (s) => {
    let sArr = s.split("");
    let i=1;
    while(i < sArr.length) {
        if((/[0-9]/).test(sArr[i]) && (/[a-z]/).test(sArr[i-1])) {
            sArr.splice(i-1,2);
            i=0;
        } else {
            i++;
        }
    }
    return sArr.join("")
}

console.log(clearDigits(s = "cb34"));