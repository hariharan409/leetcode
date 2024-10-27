
/**
 * 
 * @param {Array} releaseTimes 
 * @param {String} keysPressed 
 */
const slowestKey = (releaseTimes,keysPressed) => {
    let slowest = ["", Number.NEGATIVE_INFINITY]; // Initialize an array to store the slowest key and its duration

for (let i = 0; i < releaseTimes.length; i++) {
    // Calculate the duration of the current key press
    let difference = (releaseTimes[i] - (releaseTimes[i - 1] || 0));
    
    // Check if the current duration is greater than the longest found so far
    if (difference > slowest[1]) {
        slowest[0] = keysPressed[i]; // Update the slowest key
        slowest[1] = difference; // Update the maximum duration
    } else if (difference === slowest[1]) {
        // If durations are equal, check for the lexicographically larger key
        if (keysPressed[i].charCodeAt(0) > slowest[0].charCodeAt(0)) {
            slowest[0] = keysPressed[i]; // Update the slowest key to the lexicographically larger key
        }
    }
}

return slowest[0]; // Return the slowest key
}

console.log(slowestKey(releaseTimes = [9,29,49,50], keysPressed = "cbcd"));