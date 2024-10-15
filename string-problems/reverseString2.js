
/**
 * 
 * @param {String} s 
 * @param {Number} k 
 */
const reverseString2 = (s,k) => {
    let finalArr = [];
    let arr = s.split("");
    let twoK = 2 * k;
    for(let i=0;i<arr.length;i+=twoK) {
        let firstKArr = arr.slice(i,i+k);
        let nextKArr = arr.slice(i+k,i+(2*k)); 
        finalArr.push(...firstKArr.reverse(),...nextKArr);
    }
    return finalArr.join("");
}

console.log(reverseString2(s = "abcdefg", k = 2));