/**
 * @param {string} romanString
 * @return {number}
 */
const romanToInt = (romanString) => {
    let romanObject = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }    
    let finalValue = 0;
    for(let i=0;i<romanString.length;i++) {
        let nextIndex = i+1;
        if(
            (romanString[i] === "I" && (romanString[nextIndex] === "V" || romanString[nextIndex] === "X")) ||
            (romanString[i] === "X" && (romanString[nextIndex] === "L" || romanString[nextIndex] === "C")) ||
            (romanString[i] === "C" && (romanString[nextIndex] === "D" || romanString[nextIndex] === "M"))
        ) {
            finalValue += Math.abs(romanObject[romanString[i]] - romanObject[romanString[nextIndex]]);
            i += 1;
        } else {
            finalValue += romanObject[romanString[i]];
        }
    }
    return finalValue;
}

console.log("FINAL VALUE : ",romanToInt("MCMXCIV"));