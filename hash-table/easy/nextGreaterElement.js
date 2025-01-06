
/**
 * 
 * @param {Number[]} nums1 
 * @param {Number[]} nums2 
 */
const nextGreaterElement = (nums1,nums2) => {
    let finalArr = [];
    for(let num of nums1) {
        let isFound = false;
        let index = nums2.indexOf(num);
        while(index < nums2.length) {
            if(nums2[index] > num) {
                finalArr.push(nums2[index]);
                isFound = true;
                break;
            }
            index++;
        }
        if(!isFound) {
            finalArr.push(-1);
        }
    }
    return finalArr;
}

console.log(nextGreaterElement(nums1 = [1,3,5,2,4],nums2 = [6,5,4,3,2,1,7]));