
/**
 * 
 * @param {Number[]} nums1 
 * @param {Number[]} nums2 
 */
const intersect = (nums1,nums2) => {
    let intersectionArr = [];
    let num1Freq = {};
    let num2Freq = {};

    for(let num of nums1) {
        num1Freq[num] = (num1Freq[num] || 0) + 1;
    }

    for(let num of nums2) {
        num2Freq[num] = (num2Freq[num] || 0) + 1;
    }

    for(let key in num1Freq) {
        if(num2Freq[key]) {
            let count = Math.min(num1Freq[key],num2Freq[key]);
            intersectionArr.push(...Array(count).fill(Number(key)));
        }
    }
    return intersectionArr;
}

console.log(intersect(nums1 = [1,2,2,1], nums2 = [2,2]));