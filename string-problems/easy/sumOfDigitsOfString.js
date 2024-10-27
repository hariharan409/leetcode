
/**
 * 
 * @param {String} s 
 * @param {Number} k 
 */
const sumOfDigitsOfString = (s,k) => {
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let tempArr = [""];

    for(let char of s) {
        tempArr[0] += (alphabets.indexOf(char) + 1);
    }

    for(let i=0;i<k;i++) {
        let tempValue = 0;
        for(let num of tempArr[tempArr.length - 1]) {
            tempValue += parseInt(num);
        }
        tempArr.push(tempValue.toString());
    }
    return parseInt(tempArr.pop());
}

console.log(sumOfDigitsOfString(s = "zbax",k = 2));