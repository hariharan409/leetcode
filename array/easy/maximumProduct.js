
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order

    // The maximum product can be either:
    // 1. Product of the largest three numbers
    // 2. Product of the two smallest numbers (most negative) and the largest number
    const n = nums.length;
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    const product2 = nums[0] * nums[1] * nums[n - 1];

    return Math.max(product1, product2);
};

// product1: The product of the last three numbers (nums[n-1], nums[n-2], nums[n-3]).
// product2: The product of the first two numbers (nums[0], nums[1]) and the largest number (nums[n-1]). This handles cases where two large negative numbers result in a positive product.