
/**
 * @param {number[]} nums
 * @return {number}
 */
// const missingNumber = (nums) => {
//     nums.sort((a,b) => a-b);

//     for(let i=0;i<nums.length;i++) {
//         if(nums[i] !== i) {
//             return i;
//         }
//     }
//     return nums[nums.length - 1] + 1;
// }

const missingNumber = (nums) => {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    
    return expectedSum - actualSum;
};

console.log(missingNumber(nums = [0,1]));