/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxNumArr = [];
    let consecutiveOnes = 0;

    for(let i=0;i<nums.length;i++) {
      if(nums[i] === 1) {
        consecutiveOnes++;
      } else {
        if(consecutiveOnes > 0) {
          maxNumArr.push(consecutiveOnes);
          consecutiveOnes = 0;
        }
      }
    }

    if(consecutiveOnes > 0) {
      maxNumArr.push(consecutiveOnes);
    }

    if(maxNumArr.length > 0) {
      return Math.max(...maxNumArr)
    } else {
      return 0;
    }
};

console.log(findMaxConsecutiveOnes(nums = [0]));