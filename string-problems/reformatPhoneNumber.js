
/**
 * 
 * @param {String} number 
 */
// const reformatPhoneNumber = (number) => {
//     let finalStr = "";
//     let numArr = number.split("").filter((digit) => !([" ","/","-"]).includes(digit));
//     let tempIndex = 0;

//     while(tempIndex < numArr.length) {
//         if(numArr.slice(tempIndex).length > 4) {
//             finalStr += numArr.slice(tempIndex,tempIndex + 3);
//             finalStr += "-";
//             tempIndex += 3;
//         } else if(numArr.slice(tempIndex).length === 4) {
//             finalStr += numArr.slice(tempIndex,tempIndex+2);
//             finalStr += "-";
//             finalStr += numArr.slice(tempIndex + 2,tempIndex+4);
//             tempIndex += 4;
//         } else if(numArr.slice(tempIndex).length === 3) {
//             finalStr += numArr.slice(tempIndex);
//             tempIndex += 3;
//         } else {
//             finalStr += numArr.slice(tempIndex);
//             tempIndex += numArr.slice(tempIndex).length;
//         }
//     }
//     return finalStr.replaceAll(",","");
// }

const reformatPhoneNumber = (number) => {
    let finalStr = "";
    // Filter out spaces, dashes, and slashes
    let numArr = number.split("").filter((digit) => ![" ", "/", "-"].includes(digit));
    let tempIndex = 0;

    while (tempIndex < numArr.length) {
        if (numArr.length - tempIndex > 4) {
            // Add a block of 3 digits followed by a dash
            finalStr += numArr.slice(tempIndex, tempIndex + 3).join('') + "-";
            tempIndex += 3;
        } else if (numArr.length - tempIndex === 4) {
            // For 4 remaining digits, add two blocks of 2 digits each
            finalStr += numArr.slice(tempIndex, tempIndex + 2).join('') + "-";
            finalStr += numArr.slice(tempIndex + 2, tempIndex + 4).join('');
            tempIndex += 4;
        } else {
            // For 2 or 3 remaining digits, add them without a dash at the end
            finalStr += numArr.slice(tempIndex).join('');
            tempIndex += numArr.length - tempIndex;
        }
    }

    return finalStr;
}

console.log(reformatPhoneNumber(number = "123 4-567"));