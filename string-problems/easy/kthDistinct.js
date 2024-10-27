
/**
 * 
 * @param {Array} arr 
 * @param {Number} k 
 */
const kthDistinct = (arr,k) => {
    let distinctArr = [];
    let i = 0;

    while(i < arr.length) {
        let isDistinct = arr.filter((char) => char == arr[i]).length === 1;
        if(isDistinct) {
            distinctArr.push(arr[i]);
        }
        i++;
    }
    return distinctArr[k - 1] || ""; 
}

console.log(kthDistinct(arr = ["d","b","c","b","c","a"], k = 2));