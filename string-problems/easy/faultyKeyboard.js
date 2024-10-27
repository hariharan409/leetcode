
/**
 * 
 * @param {String} s 
 */
const faultyKeyboard = (s) => {
    let finalStr = "";

    for(let char of s) {
        if(char === "i") {
            finalStr = finalStr.split("").reverse().join("");
        } else {
            finalStr += char;
        }
    }
    return finalStr;
}

console.log(faultyKeyboard(s = "string"));