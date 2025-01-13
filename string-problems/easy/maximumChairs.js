
/**
 * @param {string} s
 * @return {number}
 */
var maximumChairs = function(s) {
    let maxChairs = 0; // Maximum number of chairs needed at any time
    let currentPeople = 0; // Current number of people in the waiting room

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'E') {
            currentPeople++; // A person enters the waiting room
            maxChairs = Math.max(maxChairs, currentPeople); // Update max chairs if needed
        } else if (s[i] === 'L') {
            currentPeople--; // A person leaves the waiting room
        }
    }

    return maxChairs;
};