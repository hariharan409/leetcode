
/**
 * 
 * @param {String} time 
 */
const maximumDigits = (time) => {
    let hour1 = time[0];
    let hour2 = time[1];
    let minute1 = time[3];
    let minute2 = time[4];

    if(hour1 === "?") {
        if(hour2 === "?") {
            hour1 = "2";
        } else {
            hour1 = parseInt(hour2) <= 3 ? "2" : "1";
        }
            
    }

    if(hour2 === "?") {
        hour2 = parseInt(hour1) <= 1 ? "9" : "3";
    }

    if(minute1 === "?") {
        minute1 = "5"; 
    }

    if(minute2 === "?") {
        minute2 = "9";
    }

    return (hour1.toString()+hour2.toString()+":"+minute1.toString()+minute2.toString());
}

console.log(maximumDigits(time = "2?:?0"));