
/**
 * 
 * @param {Number} n 
 */
const generateAStrWithOddChar = (n) => {
    let oddChar = "";
    if(n % 2 === 0) {
        oddChar += "a".repeat(n-1);
        oddChar += "b".repeat(1);
    } else {
        oddChar += "a".repeat(n);
    }
    return oddChar;
}

console.log(generateAStrWithOddChar(n=4));