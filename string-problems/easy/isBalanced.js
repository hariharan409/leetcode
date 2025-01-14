/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let sumEven = 0;
    let sumOdd = 0;
    for(let i=0;i<num.length;i++) {
        if(i % 2 === 0) {
            sumEven += parseInt(num[i]);
        } else {
            sumOdd += parseInt(num[i]);
        }
    }
    return sumOdd === sumEven;
};