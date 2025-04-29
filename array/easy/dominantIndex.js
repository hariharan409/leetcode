/**
 * @param {number[]} nums
 * @return {number}
*/
const dominantIndex = (nums) => {
    let largestNumber = Math.max(...nums);
    
    for(let i=0;i<nums.length;i++) {
        let double = nums[i] * 2;
        if(nums[i] !== largestNumber && double > largestNumber) {
            return -1;
        }
    }

    return nums.indexOf(largestNumber);
};

console.log(dominantIndex(nums = [3,6,1,0]));