
/**
 * 
 * @param {Number[]} nums1 
 * @param {Number[]} nums2 
 */
// const intersection = (nums1,nums2) => {
//     let intersectionArr = [];
//     for(let i=0;i<nums1.length;i++) {
//         if(nums2.includes(nums1[i]) && !(intersectionArr.includes(nums1[i]))) {
//             intersectionArr.push(nums1[i]);
//         }
//     }
//     return intersectionArr;
// }

const intersection = (nums1,nums2) => {
    let num1Set = new Set(nums1);
    let num2Set = new Set(nums2);
    let intersectionArr = [];

    for(let num of num1Set) {
        if(num2Set.has(num)) {
            intersectionArr.push(num);
        }
    }
    return intersectionArr;
}

console.log(intersection(nums1 = [1,2,2,1], nums2 = [2,2]));