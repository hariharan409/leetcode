
/**
 * @param {number[]} originalArr
 * @return {boolean}
 */
const containsDuplicate = (originalArr) => {
    let originalSize = originalArr.length;
    let uniqueSetSize = new Set(originalArr).size;
    return originalSize !== uniqueSetSize ? true : false;
}

console.log(containsDuplicate([1,2,3,4]));