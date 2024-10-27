
/**
 * 
 * @param {String} s 
 * @param {Number} k 
 */
const digitSum = (s,k) => {
    let sArr = s.split("");  // Convert string to array of characters
    while (sArr.length > k) {  // Continue as long as the length is greater than k
        let tempArr = [];  // Temporary array to store the new string after summing groups
        // Loop through sArr, taking groups of size k
        for (let i = 0; i < sArr.length; i += k) {
            let group = sArr.slice(i, i + k);  // Get group of size k or smaller
            let total = group.reduce((sum, num) => sum + parseInt(num), 0);  // Sum the digits
            tempArr.push(...total.toString().split(""));  // Push sum's digits into temp array
        }
        sArr = tempArr;  // Update sArr with the new array
    }

    return sArr.join("");  // Join the array back into a string and return
}

console.log(digitSum(s = "01234567890", k = 2));