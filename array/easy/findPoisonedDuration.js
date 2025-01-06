

function findPoisonedDuration(timeSeries, duration) {
    if (timeSeries.length === 0) return 0;

    let totalTime = 0;

    for (let i = 0; i < timeSeries.length - 1; i++) {
        totalTime += Math.min(duration, timeSeries[i + 1] - timeSeries[i]);
    }

    // Add the duration for the last attack
    totalTime += duration;

    return totalTime;
}

// Example 1
const timeSeries1 = [1, 4];
const duration1 = 2;
console.log(findPoisonedDuration(timeSeries1, duration1)); // Output: 4

// Example 2
const timeSeries2 = [1, 2];
const duration2 = 2;
console.log(findPoisonedDuration(timeSeries2, duration2)); // Output: 3





// another version using helper function
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = (timeSeries, duration) => {
    let poisonedDuration = 0;

    for(let i=0;i<timeSeries.length;i++) {
      let durationCount = checkDuration(timeSeries[i],timeSeries[i+1],duration);
      poisonedDuration += durationCount;
    }
    return poisonedDuration;
};

/**
 * 
 * @param {Number} previous 
 * @param {Number} current 
 * @param {Number} duration 
 */
const checkDuration = (current,next,duration) => {
  if((current + (duration - 1)) < next || next === undefined) {
    return duration;
  } else {
    return next - current;
  }
}

console.log(findPoisonedDuration(timeSeries = [1,2], duration = 2));
