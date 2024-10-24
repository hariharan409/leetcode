
/**
 * 
 * @param {String} arriveAlice 
 * @param {String} leaveAlice 
 * @param {String} arriveBob 
 * @param {String} leaveBob 
 */
const countDaysTogether = (arriveAlice,leaveAlice,arriveBob,leaveBob) => {
    /* BELOW MENTIONED VALUES ARE DAY COUNT OF THE YEAR */
    
    let aliceArrCount   = accumulateMonth(parseInt(arriveAlice.slice(0,2))) + parseInt(arriveAlice.slice(3,5));
    let aliceLeaveCount = accumulateMonth(parseInt(leaveAlice.slice(0,2))) + parseInt(leaveAlice.slice(3,5));
    let bobArrCount     = accumulateMonth(parseInt(arriveBob.slice(0,2))) + parseInt(arriveBob.slice(3,5));
    let bobLeaveCount   = accumulateMonth(parseInt(leaveBob.slice(0,2))) + parseInt(leaveBob.slice(3,5));
    
    let count = 0;

    for(let i = aliceArrCount;i<= aliceLeaveCount;i++) {
        if(i >= bobArrCount && i <= bobLeaveCount) {
            count++;
        }
    }
    return count;
}

const accumulateMonth = (month) => {
    const dateList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let tempCount = 0;

    dateList.forEach((date,index) => {
        if(index < month - 1) {
            tempCount += date;
        }
    });
    return tempCount;
}

console.log(countDaysTogether(arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19"));