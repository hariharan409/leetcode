/**
 * @param {number[]} nums
 * @return {string[]}
 */
// const summaryRanges = function(nums) {
//     let finalArr = [];
//     if(nums.length === 0) return []; 
//     if(nums.length === 1) finalArr.push(nums[0].toString()); 
//     let tempStr = nums[0].toString();
//     let arrow = "->";

    

//     for(let i=1;i<nums.length;i++) {
//         if(nums[i - 1] + 1 === nums[i]) {
//             /* add the arrow inbetween to the two numbers */
//             if(!tempStr.includes(arrow)) {
//                 tempStr += arrow;
//             }
//             if(tempStr.lastIndexOf(">") !== tempStr.length - 1) {
//                 tempStr = tempStr.slice(0, tempStr.lastIndexOf(">") + 1);
//             }
//             tempStr += nums[i].toString();
//             if(i === nums.length - 1) {
//                 finalArr.push(tempStr);
//             }
//         } else {
//             finalArr.push(tempStr);
//             tempStr = nums[i].toString();
//             if(i === nums.length - 1) {
//                 finalArr.push(tempStr);
//             }
//         }
//     }
//     return finalArr;
// }; 

/* cleanest solution */

const summaryRanges = (nums) => {
    if (nums.length === 0) return [];
    let finalArr = [];
    let tempStr = nums[0].toString();

    for (let i = 1; i <= nums.length; i++) {
        // If the current number is not consecutive or we are at the end of the array
        if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
            // Add the range or single number to the result
            if (tempStr !== nums[i - 1].toString()) {
                tempStr += `->${nums[i - 1]}`;
            }
            finalArr.push(tempStr);

            // Start a new range if not at the end of the array
            if (i < nums.length) {
                tempStr = nums[i].toString();
            }
        }
    }
    return finalArr;
}