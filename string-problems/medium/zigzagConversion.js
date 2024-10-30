
/**
 * 
 * @param {String} s 
 * @param {Number} numRows 
 */
const zigzagConversion = (s,numRows) => {
    let tempArr = [];
    let status = {row: 0,isIncreament: true}

    for(let char of s) {
        if(!tempArr[status.row]) tempArr[status.row] = [];
        tempArr[status.row].push(char);
        // Toggle direction at the boundaries
        if (status.row === numRows - 1) status.isIncreament = false;
        if (status.row === 0) status.isIncreament = true;

        // Move up or down
        status.row += status.isIncreament ? 1 : -1;
    }

    let finalStr = "";
    for(let arr of tempArr) {
        let str = arr.join("");
        finalStr += str;
    }
    return finalStr;
}

console.log(zigzagConversion(s = "PAYPALISHIRING", numRows = 3));