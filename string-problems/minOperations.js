/**
 * @param {String} s
 */
const minOperations = (s) => {
    let sArr = s.split("");
    let changeCountArr = [0, 0];

    // First possible pattern: starts with '0'
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] !== (i % 2 === 0 ? '0' : '1')) {
            changeCountArr[0]++;
        }
    }

    // Second possible pattern: starts with '1'
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] !== (i % 2 === 0 ? '1' : '0')) {
            changeCountArr[1]++;
        }
    }

    return Math.min(...changeCountArr);
};

console.log(minOperations(s = "110010"));