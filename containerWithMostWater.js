
/**
 * @param {number[]} heightList
 * @return {number}
 */
const containerWithMostWater = (heightList) => {
    let maxArea = 0;
    let left = 0;
    let right = heightList.length - 1;

    while(left < right) {
        // Calculate the current area
        const width = right - left;
        const currentHeight = Math.min(heightList[left],heightList[right]);
        const area = width * currentHeight;
        // Update maxArea if the current one is larger
        maxArea = Math.max(maxArea,area);
        if(heightList[left] < heightList[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}

console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7]));