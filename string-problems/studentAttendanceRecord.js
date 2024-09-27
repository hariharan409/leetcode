
/**
 * @param {string} originalStr
 * @return {boolean}
 */
const studentAttendanceRecord = (originalStr) => {
    let originalArr = originalStr.split("");
    if(originalArr.filter((str) => str === "A").length > 1) return false;
    if(originalStr.includes('LLL')) return false;
    return true; 
}

console.log(studentAttendanceRecord("PPALLL"));