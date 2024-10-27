
/**
 * @param {number} columnNumber
 * @return {string}
 */
const excelSheetColumnTitle = (columnNumber) => {
    let result = '';
    while (columnNumber > 0) {
        columnNumber--; // Adjust for 1-based indexing
        let remainder = columnNumber % 26;
        result = String.fromCharCode(remainder + 65) + result; // Convert remainder to corresponding letter
        columnNumber = Math.floor(columnNumber / 26); // Move to the next "digit"
    }
    return result;
}

console.log(excelSheetColumnTitle(12));