/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = (nums) => {
    let isIncreasing = true;
    let isDecreasing = true;

    for(let i=1;i<nums.length;i++) {
        const prev = nums[i-1];
        const curr = nums[i];

        isIncreasing = isIncreasing && prev <= curr;
        isDecreasing = isDecreasing && prev >= curr;

        if(!isIncreasing && !isDecreasing) {
            return false;
        }
    } 

    return true;

};

console.log(isMonotonic(nums = [1,2,2,3]));