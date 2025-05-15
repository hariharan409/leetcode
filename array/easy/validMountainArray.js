
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = (arr) => {
    if(arr.length < 3) return false;
    let leftPointer = 1;
    let rightPointer = arr.length - 1;

    while(leftPointer < rightPointer) {
        if((arr[leftPointer] <= arr[leftPointer - 1]) && leftPointer !== 0 ) {
            return false;
        }
        if((arr[rightPointer] >= arr[rightPointer - 1]) && rightPointer !== arr.length - 1) {
            return false;
        }

        leftPointer++;
        rightPointer--;
    }
    return true;
}

console.log(validMountainArray(arr = [3,5,5]))