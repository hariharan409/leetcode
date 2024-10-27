
/**
 * 
 * @param {String} s 
 * @param {Number} k 
 */
const getEncryptedString = (s,k) => {
    let sArr = s.split("");

    for(let i=0;i<sArr.length;i++) {
        let index = (i + k) % sArr.length;
        sArr[i] = s[index];
    }
    return sArr.join("");
}

console.log(getEncryptedString(s = "dart", k = 3));