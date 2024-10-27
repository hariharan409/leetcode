
/**
 * 
 * @param {String} num 
 */
const digitCount = (num) => {

    for(let i=0;i<num.length;i++) {
        let appearance = num.split("").filter((digit) => digit === i.toString()).length;
        if(appearance.toString() !== num[i]) {
            return false;
        }
    }
    return true;
}

console.log(digitCount(num = "1210"));