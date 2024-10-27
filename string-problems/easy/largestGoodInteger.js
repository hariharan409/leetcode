
/**
 * 
 * @param {String} num 
 */
const largestGoodInteger = (num = "6777133339") => {
    let largestStr = "";

    for(let i=0;i<num.length;i++) {
        let subStr = num.slice(i,i+3);
        if(num[i].repeat(3) === subStr) {
            if(subStr > largestStr) {
                largestStr = subStr;
            }
        }
    }
    return largestStr;
}

console.log(largestGoodInteger(num = "6777133339"));