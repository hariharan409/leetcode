
/**
 * 
 * @param {Number[]} nums 
 */
const findDisappearedNumbers = (nums) => {
    let numList = [];
    let uniqueSet = new Set(nums);

    for(let i=1;i<=nums.length;i++) {
        if(!uniqueSet.has(i)) {
            numList.push(i);
        }
    }
    return numList;
}

console.log(findDisappearedNumbers(nums = [4,3,2,7,8,2,3,1]));