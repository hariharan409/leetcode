
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = (num,k) => {
    let kStr = k.toString();
    const max = Math.max(num.length,kStr.length);

    let finalArr = [];
    let remainder = 0;

    for(let i=0;i<max;i++) {
        let tempNum = (num[num.length - 1 - i] || 0);
        let tempK = (kStr[kStr.length - 1 - i] || 0);

        let sum = parseInt(tempNum) + parseInt(tempK) + parseInt(remainder);
        remainder = 0;
        finalArr.push(sum.toString().length > 1 ? parseInt(sum.toString()[1]) : sum);

        if(sum.toString().length > 1) {
            remainder  = sum.toString()[0];
        }
    }

    if(parseInt(remainder) !== 0) finalArr.push(parseInt(remainder));

    return finalArr.reverse();
}

console.log(addToArrayForm(num = [2,7,4], k = 181));