
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/* You must write an algorithm with O(log n) runtime complexity. */
/* O(log n) ---> DIVIDE AND CONQUER ALGORITHM */
const searchInsertPosition = (nums, target) => {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    while(leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(nums[midIndex] === target) {
            return midIndex;
        } else if(target > nums[midIndex]) {
            leftIndex = midIndex + 1;
        } else {
            rightIndex = midIndex - 1;
        }
    }
    // If the target is not found, return the position where it should be inserted
    return leftIndex;
}

console.log(searchInsertPosition([1,3],2));