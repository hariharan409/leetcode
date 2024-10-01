
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const buddyString = (s,goal) => {
    let currentIndex = 0;

    while(currentIndex < s.length - 1) {
        let splittedArray = s.split("");
        let temp = splittedArray[currentIndex];
        splittedArray[currentIndex] = splittedArray[currentIndex+1];
        splittedArray[currentIndex+1] = temp;
        if(splittedArray.join("") === goal) {
            return true;
        }
        currentIndex++;
    }
    return false;
}

console.log(buddyString(s = "ab", goal = "ba"));