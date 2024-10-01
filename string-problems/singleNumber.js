
/**
 * @param {number[]} list
 * @return {number}
 */
/* WORST CASE TIME COMPLEXITY - O(n2) */
const singleNumber = (list) => {
    let tempIndex = 0;
    while(tempIndex < list.length) {
        if(list.filter((num) => num === list[tempIndex]).length === 1) {
            return list[tempIndex];
        }
        tempIndex++;
    }
}

/* ANOTHER APPROACH WITH O(n) TIME COMPLEXITY */
/* Explanation of the Example:
For nums = [2, 2, 1]:

res = 0 ^ 2 = 2
res = 2 ^ 2 = 0
res = 0 ^ 1 = 1 → The single number is 1.
For nums = [4, 1, 2, 1, 2]:

res = 0 ^ 4 = 4
res = 4 ^ 1 = 5
res = 5 ^ 2 = 7
res = 7 ^ 1 = 6
res = 6 ^ 2 = 4 → The single number is 4.
Time and Space Complexity:
Time Complexity: O(n) – We traverse the list once.
Space Complexity: O(1) – We only use a constant amount of extra space (res). */

const singleNumberNextApproach = (list) => {
    let res = 0;
    for (let num of list) {
        res ^= num; // XOR each number with the result
    }
    return res; // return the single number
}
console.log(singleNumber([1]));