/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let longestSubArray = 1;
    let tempCount = 1;
    for(let i=1;i<nums.length;i++) {
      if(nums[i] > nums[i - 1]) {
        tempCount++;
      } else {
        longestSubArray = checkCount(tempCount,longestSubArray);
        tempCount = 1;
      }
    }
    longestSubArray = checkCount(tempCount,longestSubArray);
    return longestSubArray;
  }
  
  const checkCount = (tempCount,longestSubArray) => {
    if(tempCount > longestSubArray) {
      longestSubArray = tempCount;
    }
    return longestSubArray;
  }
  
  console.log(findLengthOfLCIS(nums = [1,3,5,4,7]));