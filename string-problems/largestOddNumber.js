
/**
 * 
 * @param {String} num 
 */
const largestOddNumber = (num) => {
    let tempIndex = num.length;

    while(tempIndex > 0) {
        if( num[tempIndex - 1] % 2 !== 0) {
            let subStr = num.slice(0,tempIndex);
            return subStr;
        }

        tempIndex--;
    }
    return "";
}

console.log(largestOddNumber(num = "35427"));