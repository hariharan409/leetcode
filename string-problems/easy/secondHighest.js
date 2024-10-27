
/**
 * 
 * @param {String} s 
 */
const secondHighest = (s) => {
    let regex = /[0-9]/g;
    let tempArr = s.match(regex) || [];  // Extract digits
    let sSet = new Set(tempArr.map((char) => parseInt(char)));  // Convert digits to a set of unique numbers

    if (sSet.size <= 1) return -1;

    // Convert the set to an array and sort in descending order
    let sortedArr = [...sSet].sort((a, b) => b - a);
    
    // Return the second largest
    return sortedArr[1];
}

console.log(secondHighest(s="ck0778"));