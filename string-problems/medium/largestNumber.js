
/**
 * 
 * @param {Array} nums 
 */
const largestNumber = (nums) => {
    let numStrs = nums.map(String);

    numStrs.sort((a,b) => (b+a).localeCompare(a+b));

    if(numStrs[0] === "0") {
        return "0";
    }

    return numStrs.join("");
}

console.log(largestNumber(nums = [3,30,34,5,9]));