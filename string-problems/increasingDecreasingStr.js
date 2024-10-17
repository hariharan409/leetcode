
/**
 * 
 * @param {String} s 
 */
const increasingDecreasingStr = (s) => {
    let resultStr = "";
    let sArr = s.split("").sort();

    while(sArr.length > 0) {
        // step 1. Remove the smallest character from s and append it to the result.
        resultStr += sArr.shift();
        // step 2. Remove the smallest character from s that is greater than the last appended character, and append it to the result.
        // step 3: Repeat step 2 until no more characters can be removed.
        let increaseIndex = 0;
        while(increaseIndex < sArr.length) {
            if(sArr[increaseIndex].charCodeAt(0) > resultStr.charCodeAt(resultStr.length - 1)) {
                resultStr += sArr[increaseIndex];
                sArr.splice(increaseIndex,1);
            } else {
                increaseIndex++;
            }
        }
        // step 4: Remove the largest character from s and append it to the result.
        if(sArr.length > 0) {
            resultStr += sArr.pop();
        }
        // step 5. Remove the largest character from s that is smaller than the last appended character, and append it to the result.
        // step 6: Repeat step 5 until no more characters can be removed.
        let decreaseIndex = sArr.length - 1;
        while(decreaseIndex >= 0) {
            if(sArr[decreaseIndex].charCodeAt(0) < resultStr.charCodeAt(resultStr.length - 1)) {
                resultStr += sArr[decreaseIndex];
                sArr.splice(decreaseIndex,1);
            }
            decreaseIndex--;
        }
    }
    return resultStr;
}

console.log(increasingDecreasingStr(s="leetcode"));