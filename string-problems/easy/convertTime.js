
/**
 * 
 * @param {String} current 
 * @param {String} correct 
 */
const convertTime = (current,correct) => {
    let count = 0;
    let currentHour = parseInt(current.slice(0, 2));
    let correctHour = parseInt(correct.slice(0, 2));
    let currentMinutes = parseInt(current.slice(3, 5));
    let correctMinutes = parseInt(correct.slice(3, 5));

    let currentTimeInMinutes = (currentHour * 60) + currentMinutes;
    let correctTimeInMinutes = (correctHour * 60) + correctMinutes;

    let diff = correctTimeInMinutes - currentTimeInMinutes;

    while (diff > 0) {
        if (diff >= 60) {
            diff -= 60;
        } else if (diff >= 15) {
            diff -= 15;
        } else if (diff >= 5) {
            diff -= 5;
        } else {
            diff -= 1;
        }
        count++;
    }

    return count;
}

console.log(convertTime(current = "09:41", correct = "10:34"));