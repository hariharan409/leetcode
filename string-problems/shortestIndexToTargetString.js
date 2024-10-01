
/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
const shortestIndexToTargetString = (words,target,startIndex) => {
    const n = words.length;
    let minDistance = Infinity;
    for(let i=0;i<n;i++) {
        if(words[i] === target) {
            // Calculate both forward and backward distances
            const forwardDistance = (i-startIndex+n) %n;
            const backwardDistance = (startIndex-i+n) % n;
            // Find the minimum of the two
            minDistance = Math.min(minDistance,forwardDistance,backwardDistance);
        }
    }
    // If minDistance was updated, return it, otherwise return -1 (target not found)
    return minDistance !== Infinity ? minDistance : -1;
}

console.log(shortestIndexToTargetString(["hello","i","am","leetcode","hello"],"hello",1));