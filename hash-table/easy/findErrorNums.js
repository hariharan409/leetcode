
/**
 * 
 * @param {Number[]} nums 
 */
const findErrorNums = (nums) => {
    const frequencyMap = new Array(nums.length + 1).fill(0);
    let duplicate, missing;

    for(let num of nums) {
        frequencyMap[num]++;
    }

    for(let i=1;i<frequencyMap.length;i++) {
        if(frequencyMap[i] === 2) {
            duplicate = i;
        } 
        if(frequencyMap[i] === 0) {
            missing = i;
        }
    }
    return [duplicate,missing];
}

console.log(findErrorNums(nums = [3,2,3,4,6,5]));