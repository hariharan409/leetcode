
/**
 * 
 * @param {String} num 
 */
const removeTrailingZeros = (num) => {
    let numIndex = num.lastIndexOf(num.match(/[1-9]/g).pop());
    if(numIndex !== -1) {
        let newNum = num.slice(0,numIndex + 1);
        return newNum;
    }
    return num;
}

// function removeTrailingZeros(num) {
//     return num.replace(/0+$/, '');
// }

console.log(removeTrailingZeros(num = "51230100"));