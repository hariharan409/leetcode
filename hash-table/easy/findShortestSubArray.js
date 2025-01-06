
/**
 * 
 * @param {Number[]} nums 
 */
const findShortestSubArray = (nums) => {
    let frequencyMap = {};
    let degree = 0;
    let shortestDistance = Infinity;

    for(let num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        degree = Math.max(degree,frequencyMap[num]);
    }

    for(let key in frequencyMap) {
        if(frequencyMap[key] === degree) {
            let firstIndex = nums.indexOf(parseInt(key));
            let lastIndex = nums.lastIndexOf(parseInt(key));
            shortestDistance = Math.min(shortestDistance,((lastIndex - firstIndex) + 1));
        }
    }
    return shortestDistance;
}

console.log(findShortestSubArray(nums = [1,2,2,3,1,4,2]));