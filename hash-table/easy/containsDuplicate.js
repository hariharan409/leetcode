
/**
 * 
 * @param {Number[]} nums 
 */
const containsDuplicate = (nums) => {
    let frequencyObj = {};

    for(let num of nums) {
        frequencyObj[num] = (frequencyObj[num] || 0) + 1;
    }
    
    for(let key in frequencyObj) {
        if(frequencyObj[key] > 1) {
            return true;
        }
    }
    return false;
}

console.log(containsDuplicate(nums = [1,2,3,1]));