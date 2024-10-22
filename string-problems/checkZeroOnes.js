
/**
 * 
 * @param {String} s 
 */
const checkZeroOnes = (s) => {
    let largestOneCount  = 0;
    let largestZeroCount = 0;
    let temp = {
        one: 0,
        zero: 0
    };

    for(let digit = 0;digit<s.length;digit++) {
        if(s[digit] === "1") {
            temp.one++;
            largestOneCount = Math.max(largestOneCount,temp.one);
            temp.zero = 0;
        } else {
            temp.zero++;
            largestZeroCount = Math.max(largestZeroCount,temp.zero);
            temp.one = 0;
        }

        if(digit === s.length - 1) {
            Math.max(largestZeroCount,temp.zero);
            Math.max(largestOneCount,temp.one);
        }
    }

    return largestOneCount > largestZeroCount;
}

console.log(checkZeroOnes(s = "111000"));