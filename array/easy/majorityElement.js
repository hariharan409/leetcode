
/**
 * 
 * @param {Array} nums 
 */
const majorityElement = (nums) => {
    let frequencyObj = {};

    for(let num of nums) {
        frequencyObj[num] = (frequencyObj[num] || 0) + 1;
    }

    let majority = {
        key: 0,
        value: 0
    };
    for(let num in frequencyObj) {
        if(frequencyObj[num] > majority.value) {
            majority = {
                key: num,
                value: frequencyObj[num]
            };
        }
    }
    return parseInt(majority.key);
}

console.log(majorityElement(nums = [3,2,3]));