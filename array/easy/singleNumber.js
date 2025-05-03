
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    let freqMap = {};
    
    for(let num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }
    
    
    for(let num in freqMap) {
        if(freqMap[num] === 1) {
            return num;
        }
    }
}

console.log(singleNumber(nums = [2,2,1]));