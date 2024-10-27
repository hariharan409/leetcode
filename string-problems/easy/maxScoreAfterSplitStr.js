
/**
 * 
 * @param {String} s 
 */
const maxScoreAfterSplitStr = (s) => {
    let countArr = [];
    let sArr = s.split("");

    for(let i=0;i<sArr.length;i++) {
        if(sArr.slice(0,i+1).length > 0 && sArr.slice(i+1).length > 0) {
            let left = sArr.slice(0,i+1).filter((digit) => digit === "0").length;
            let right = sArr.slice(i+1).filter((digit) => digit === "1").length;
            countArr.push(left + right);
        } 
    }
    return Math.max(...countArr);
}

console.log(maxScoreAfterSplitStr(s="00"));