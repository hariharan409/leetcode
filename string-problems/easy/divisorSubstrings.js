
/**
 * 
 * @param {Number} num 
 * @param {Number} k 
 */
const divisorSubstrings = (num,k) => {
    let numStr = num.toString();
    let count = 0;

    for(let i=0;i<=numStr.length - k;i++) {
        let subStr = numStr.slice(i,i+k);
        if(subStr.replaceAll("0","") !== "") {
            if(num %parseInt(subStr) === 0) {
                count++;
            }
        }
    }
    return count;
}

console.log(divisorSubstrings(num = 30003, k = 3));