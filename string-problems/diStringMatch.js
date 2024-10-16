
/**
 * 
 * @param {String} s 
 */
const diStringMatch = (s) => {
    let numArr = [];
    let finalArr = [];

    for(let i=0;i<=s.length;i++) {
        numArr.push(i);
    }
    for(let char of s) {
        if(char === "I") {
            finalArr.push(numArr.shift());
        } else {
            finalArr.push(numArr.pop());
        }
    }
    finalArr.push(numArr.pop());
    return finalArr;
}

console.log(diStringMatch(s = "DDI"));