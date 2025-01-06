
/**
 * 
 * @param {Number} n 
 */
const isHappy = (n) => {
    const seenNumbers = new Set();

    while(n !== 1 && !seenNumbers.has(n)) {
        seenNumbers.add(n);
        n = n.toString().split("").reduce((prevValue,currValue) => {
            return prevValue + Math.pow(parseInt(currValue),2);
        },0).toString();
    }

    return parseInt(n) === 1;
}   

console.log(isHappy(n = 7));