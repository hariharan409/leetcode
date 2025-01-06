
/**
 * 
 * @param {*} nums 
 */
const findLHS = (nums) => {
    let frequencyMap = {};
    let max = 0;

    for(let num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    for(let key in frequencyMap) {
        let currentNum = parseInt(key);
        if(frequencyMap[currentNum + 1] !== undefined) {
            max = Math.max(max,(frequencyMap[currentNum] + frequencyMap[currentNum + 1]));
        }
    }
    return max;
}

console.log(findLHS(nums = [-1,0,-1,0,-1,0,-1]));