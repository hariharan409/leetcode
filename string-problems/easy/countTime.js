
/**
 * 
 * @param {String} time 
 */
const countTime = (time) => {
    let validTimes = 1;

    // Process the hour part "hh"
    if (time[0] === '?') {
        // The first hour digit can be 0, 1, or 2
        if (time[1] === '?') {
            // If both first and second hour digits are ?, 00 to 23 -> 24 options
            validTimes *= 24;
        } else if (time[1] <= '3') {
            // If second digit is 0-3, first digit can be 0-2 (00 to 23)
            validTimes *= 3;
        } else {
            // If second digit is 4-9, first digit can only be 0-1
            validTimes *= 2;
        }
    } else {
        // First hour digit is known
        if (time[1] === '?') {
            if (time[0] === '2') {
                // If first digit is 2, second can be 0-3
                validTimes *= 4;
            } else {
                // If first digit is 0 or 1, second can be 0-9
                validTimes *= 10;
            }
        }
    }

    // Process the minute part "mm"
    if (time[3] === '?') {
        // The first minute digit can be 0-5
        validTimes *= 6;
    }
    
    if (time[4] === '?') {
        // The second minute digit can be 0-9
        validTimes *= 10;
    }

    return validTimes;
}

console.log(countTime(time = "?5:00"));