
/**
 * 
 * @param {Number} n 
 */
const countAndSay = (n) => {
    // Base case
    if (n === 1) return "1";
    // Recursive call to get the (n-1)th term
    const previousTerm = countAndSay(n - 1);
    let result = "";
    let count = 1;

    for(let i=1;i<previousTerm.length;i++) {
        if(previousTerm[i] === previousTerm[i-1]) {
            count++;
        } else {
            result += count.toString() + previousTerm[i-1];
            count = 1;
        }
    }
    // Append the last run-length encoding
    result += count.toString() + previousTerm[previousTerm.length - 1];
    return result;
}

console.log(countAndSay(n = 4));