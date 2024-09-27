
/**
 * @param {string[]} originalArr
 * @return {number}
 */
const maxValueOfString = (originalArr) => {
    let maxValue = 0;
    if(originalArr.length === 0) return maxValue;
    let letterRegex = /[a-zA-z]/g;
    for(let str of originalArr) {
        if(str.match(letterRegex)) {
            if(str.length > maxValue) {
                maxValue = str.length;
            }
        } else {
            if(parseInt(str) > maxValue) {
                maxValue = parseInt(str);
            }
        }
    }
    return maxValue;
}

console.log(maxValueOfString(["3glko","1"]));