
/**
 * 
 * @param {Array} nums 
 * @param {Number} k 
 */
const containsNearbyDuplicate = (nums,k) => {
    let frequencyObj = {};
    let isPairFound = false;

    for(let i=0;i<nums.length;i++) {
        if(frequencyObj[nums[i]] !== undefined) {
            let prevIndex = frequencyObj[nums[i]];
            if(Math.abs(prevIndex - i) <= k) {
                isPairFound = true;
            } else {
                frequencyObj[nums[i]] = i;
            }
        } else {
            frequencyObj[nums[i]] = i;
        }
    }
    return isPairFound;
}

console.log(containsNearbyDuplicate(nums = [1,2,3,1,2,3], k = 2));