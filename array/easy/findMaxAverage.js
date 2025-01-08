/*

var findMaxAverage = function(nums, k) {
    let maxAverage = Number.MIN_SAFE_INTEGER;

    for(let i=0;i<nums.length;i++) {
      if((i+k) <= nums.length) {
        let subArr = nums.slice(i,i+k);
        let sum = subArr.reduce((prev,curr) => prev + curr,0);
        let average = sum / k;
        if(average > maxAverage) {
          maxAverage = average;
        }
      }
    }
    return maxAverage;
};


console.log(findMaxAverage(nums = [5], k = 1));
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let sum = 0;

// Calculate the sum of the first k elements
for (let i = 0; i < k; i++) {
  sum += nums[i];
}

let maxAverage = sum / k;

// Slide the window and calculate the sum and average for each subarray of length k
for (let i = k; i < nums.length; i++) {
  sum += nums[i] - nums[i - k];  // Subtract the element going out of the window and add the new one
  maxAverage = Math.max(maxAverage, sum / k);  // Update maxAverage if necessary
}

return maxAverage;
};

console.log(findMaxAverage(nums = [1,12,-5,-6,50,3], k = 4));