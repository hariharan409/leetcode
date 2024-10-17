
/**
 * 
 * @param {string} s 
 * @param {Array} indices 
 */
// const shuffleString = (s,indices) => {
//     let finalStr = "";
//     let tempIndex = 0;

//     while(tempIndex < indices.length) {
//         let index = indices.indexOf(tempIndex);
//         finalStr += s[index];
//         tempIndex++;
//     }
//     return finalStr;
// }

const shuffleString = (s, indices) => {
    let finalStr = Array(s.length);  // Create an array to store the shuffled result

    for (let i = 0; i < indices.length; i++) {
        finalStr[indices[i]] = s[i];  // Place each character from 's' at its new position
    }

    return finalStr.join('');  // Join the array to form the final shuffled string
}

console.log(shuffleString(s = "codeleet", indices = [4,5,6,7,0,2,1,3]));