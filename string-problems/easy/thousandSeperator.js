
/**
 * 
 * @param {Number} n 
 */
// const thousandSeperator = (n) => {
//     let finalVal = [];;
//     n = n.toString();
//     let count = 3;
//     for(let i=n.length-1;i>=0;i--) {
//         if(count === 1 && n[i-1] !== undefined) {
//             finalVal.unshift(`.${n[i]}`);
//             count = 3;
//         } else {
//             finalVal.unshift(n[i]);
//             count--;
//         }
//     }
//     return finalVal.join("");
// }

const thousandSeperator = (n) => {
    let result = '';
    const str = n.toString(); // Convert the number to a string

    // Loop through the string in reverse
    for (let i = str.length - 1; i >= 0; i--) {
        // Append the current digit to the result
        result = str[i] + result;
        
        // Add a dot after every three digits, except for the last group
        if ((str.length - i) % 3 === 0 && i > 0) {
            result = '.' + result; // Add a dot before the current result
        }
    }
    
    return result; // Return the final formatted string
}


console.log(thousandSeperator(n = 1234));