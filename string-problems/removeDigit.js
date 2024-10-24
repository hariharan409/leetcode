
/**
 * 
 * @param {String} number 
 * @param {String} digit 
 */
const removeDigit = (number,digit) => {
    let maxNum = -1;

    for(let i=0;i<number.length;i++) {
        if(number[i] === digit) {
            let subStr = i === 0 ? number.slice(i+1) : number.slice(0,i) + number.slice(i+1);
            if(BigInt(subStr) > BigInt(maxNum)) {
                maxNum = subStr;
            } 
        }
    }
    return maxNum;
}

console.log(removeDigit(number = "2998589353917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471", digit = "3"));