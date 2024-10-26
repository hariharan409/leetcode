
/**
 * 
 * @param {String} s 
 */
const minimizedStringLength = (s) => {
    let sArr = s.split("");
    let i = 0;

    while(i < sArr.length) {
        let rightIndex = sArr.lastIndexOf(sArr[i]);
        if(rightIndex !== -1 && rightIndex !== i) {
            sArr.splice(rightIndex,1);
        } else {
            i++;
        }
    }
    return sArr.length;
}

// const minimizedStringLength = function(s) {
//     // Create a set of unique characters
//     const uniqueChars = new Set(s);

//     // The minimized length is the size of unique characters
//     return uniqueChars.size;
// };

console.log(minimizedStringLength( s = "aaabc"));