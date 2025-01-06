
/**
 * 
 * @param {String} a 
 * @param {String} b 
 */
const addBinary = (a,b) => {
    let newStr = (parseInt(a) + parseInt(b)).toString();
    let binaryStr = "";
    for(let char of newStr) {
        binaryStr += parseInt(char).toString(2);
    }
    return binaryStr;
}

console.log(addBinary(a="11",b="1"));