
/**
 * 
 * @param {Array} event1 
 * @param {Array} event2 
 */
const haveConflict = (event1,event2) => {
    const event1StartTime = getMinutes(event1[0].slice(0,2),event1[0].slice(3));
    const event1EndTime = getMinutes(event1[1].slice(0,2),event1[1].slice(3));

    const event2StartTime = getMinutes(event2[0].slice(0,2),event2[0].slice(3));
    const event2EndTime = getMinutes(event2[1].slice(0,2),event2[1].slice(3));

    for(let i=event1StartTime;i<=event1EndTime;i++) {
        if(i >= event2StartTime && i <= event2EndTime) {
            return true;
        }
    }
    return false;
}

const getMinutes = (hour,minute) => {
    return (parseInt(hour) * 60) + parseInt(minute);
}

console.log(haveConflict(event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]));