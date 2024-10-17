
/**
 * 
 * @param {String} date1 
 * @param {String} date2 
 */
const noOfDaysBetweenDates = (date1,date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffInTime = d2 - d1; // Difference in milliseconds
    const diffInDays = diffInTime / (1000 * 60 * 60 * 24); // Convert
    return Math.abs(diffInDays); // Return the absolute difference
}

console.log(noOfDaysBetweenDates(date1 = "2020-01-15", date2 = "2019-12-31"));