
/**
 * 
 * @param {String} s 
 */
const cellsInRange = (s) => {
    let col1 = s[0].charCodeAt(0);
    let col2 = s[3].charCodeAt(0);
    let row1 = parseInt(s[1]);
    let row2 = parseInt(s[4]);
    let cellsList = [];

    for(let i=col1;i<=col2;i++) {
        for(let j=row1;j<=row2;j++) {
            let tempStr = String.fromCharCode(i);
            tempStr += j;
            cellsList.push(tempStr);
        }
    }
    return cellsList;
}

console.log(cellsInRange(s = "A1:F1"));