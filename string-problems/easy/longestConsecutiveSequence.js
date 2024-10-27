
/**
 * @param {number[]} list
 * @return {number}
 */
const longestConsecutiveSequence = (list) => {
    if(list.length === 0) return 0;
    const numSet = new Set(list);
    let longestStreak = 0;
    
    for(let num of numSet) {
         // Check if it's the start of a sequence
         if(!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Check how long this sequence is
            while(numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            longestStreak = Math.max(longestStreak,currentStreak);
         }
    }
    return longestStreak;
}

console.log(longestConsecutiveSequence([9,1,4,7,3,-1,0,5,8,-1,6]));