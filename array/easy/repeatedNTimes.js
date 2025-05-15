
/**
 * @param {number[]} nums
 * @return {number}
 */
const repeatedNTimes = (nums) => {
        const seen = new Set();

        for(const num of nums) {
            if(seen.has(num)) return num;
            seen.add(num);
        }
}

console.log(repeatedNTimes(nums = [8,3,2,3]));