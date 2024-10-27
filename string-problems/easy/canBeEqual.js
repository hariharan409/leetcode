
/**
 * 
 * @param {String} s1 
 * @param {String} s2 
 */
// const canBeEqual = (s1,s2) => {
//     if(s1 === s2) return true;
//     let s1Arr = s1.split("");
//     let s2Arr = s2.split("");

//     const resetDefault = () => {
//         s1Arr = s1.split("");
//         s2Arr = s2.split("");
//     }

//     for(let i=0;i<s2Arr.length - 2;i++) {
//         let temp = s1Arr[i];
//         s1Arr[i] = s1Arr[i+2];
//         s1Arr[i+2] = temp;
//         if(s1Arr.join("") === s2Arr.join("")) return true;
//     };
//     resetDefault();
//     for(let i=1;i<s2Arr.length - 2;i++) {
//         let temp = s1Arr[i];
//         s1Arr[i] = s1Arr[i+2];
//         s1Arr[i+2] = temp;
//     };
//     if(s1Arr.join("") === s2Arr.join("")) {
//         return true;
//     }
//     return false;
// }

const canBeEqual = function(s1, s2) {
    // Early check if s1 and s2 are already equal
    if (s1 === s2) return true;

    // Extract and sort characters at indices 0 and 2
    const group1_s1 = [s1[0], s1[2]].sort().join('');
    const group1_s2 = [s2[0], s2[2]].sort().join('');
    
    // Extract and sort characters at indices 1 and 3
    const group2_s1 = [s1[1], s1[3]].sort().join('');
    const group2_s2 = [s2[1], s2[3]].sort().join('');

    // Return true if both groups match
    return group1_s1 === group1_s2 && group2_s1 === group2_s2;
};

console.log(canBeEqual(s1 = "zrmq", s2 = "mrzq"));