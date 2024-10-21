
/**
 * 
 * @param {String} allowed 
 * @param {Array} words 
 */
// const noOfConsistentStr = (allowed,words) => {
//     let count = 0;

//     for(let word of words) {
//         if(word.split("").filter((char) => (allowed.includes(char))).length === word.length) {
//             count++;
//         }
//     }
//     return count;
// }

const noOfConsistentStr = (allowed, words) => {
    let allowedSet = new Set(allowed);  // Convert allowed string to a Set for fast lookup
    let count = 0;

    for (let word of words) {
        let isConsistent = true;  // Assume the word is consistent
        for (let char of word) {
            if (!allowedSet.has(char)) {  // If any character is not in the allowed set
                isConsistent = false;
                break;  // No need to check further for this word
            }
        }
        if (isConsistent) {
            count++;  // Increment the counter if the word is consistent
        }
    }

    return count;  // Return the total count of consistent strings
};

console.log(noOfConsistentStr(allowed = "ab", words = ["ad","bd","aaab","baa","badab"]));