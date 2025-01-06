/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
    // we can use two pointer algorithm to achieve O(log n) runtime complexity
    function findLeft(nums, target) {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }

    function findRight(nums, target) {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return right;
    }

    const leftIdx = findLeft(nums, target);
    const rightIdx = findRight(nums, target);

    // Verify if the target exists within the bounds
    if (leftIdx <= rightIdx && nums[leftIdx] === target && nums[rightIdx] === target) {
        return [leftIdx, rightIdx];
    }
    return [-1, -1];

    
    // O(n) time complexity
    // const startingPosition = nums.indexOf(target);
    // const endingPosition = nums.lastIndexOf(target);
    // return [startingPosition,endingPosition];
};

console.log(searchRange(nums = [5,7,7,8,8,10], target = 6));