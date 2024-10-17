
/**
 * 
 * @param {String} date 
 */
const reformatDate = (date) => {
    const monthMapper = { Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06", Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12" };
    let dateArr = date.split(" ");
    let year    = dateArr[2];
    let month   = monthMapper[dateArr[1]];
    let day     = dateArr[0].slice(0,-2); 

    return `${year}-${month}-${day.length === 1 ? `0${day}` : day}`;
}

console.log(reformatDate(date = "2th Oct 2052"));