
/**
 * 
 * @param {Array} strs 
 */

// APPROACH 1
// const deleteColumnsToMakeSorted = (strs) => {
//     let index = 0;
//     let deleteCount = 0;
//     while(index < strs[0]?.length) {
//         let str = strs.map((word) => word[index]).join("");
//         let sortedStr = strs.map((word) => word[index]).sort().join("");
//         if(str !== sortedStr) {
//             deleteCount++;
//         }
//         index++;
//     }
//     return deleteCount;
// }

// APPROACH 2
const deleteColumnsToMakeSorted = (strs) => {
    let deleteCount = 0;
    const rows = strs.length;
    const cols = strs[0].length;

    for (let col = 0; col < cols; col++) {
        for (let row = 1; row < rows; row++) {
            if (strs[row][col] < strs[row - 1][col]) {
                deleteCount++;
                break;  // No need to check further, this column is unsorted
            }
        }
    }

    return deleteCount;
};

console.log(deleteColumnsToMakeSorted(strs = ["abc", "bce", "cae"]));