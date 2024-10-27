
/**
 * 
 * @param {String} date 
 */
const dayOfTheYear = (date) => {
    let givenYear  = parseInt(date.slice(0,4));
    let givenMonth = parseInt(date.slice(5,7));
    let givenDay   = parseInt(date.slice(8,10));
    const isLeapYear = LeapYearFinder(givenYear);
    const daysPerMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const day = daysPerMonth.slice(0,givenMonth-1).reduce((previousValue,currentValue) => previousValue + currentValue,0) + givenDay;
    return day;
}

const LeapYearFinder = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

console.log(dayOfTheYear(date = "2019-02-10"));