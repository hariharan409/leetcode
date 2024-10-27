/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    // Count the number of '1's and '0's
    const onesCount = s.split('1').length - 1;
    const zerosCount = s.length - onesCount;

    // Build the maximum odd binary string
    const result = '1'.repeat(onesCount - 1) + '0'.repeat(zerosCount) + '1';

    return result;
};

console.log(maximumOddBinaryNumber("0101"));