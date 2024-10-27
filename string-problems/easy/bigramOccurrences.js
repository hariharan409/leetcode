// 1078. Occurrences After Bigram

// Given two strings first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

// Return an array of all the words third for each occurrence of "first second third".

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const bigramOccurrences = (text,first,second) => {
    const tempArr = text.split(" ");
    let output = [];
    /* USING THREE POINTERS TO FIND THE OCCURRENCES */
    for(let i=0;i<tempArr.length;i++) {
        let previous = tempArr[i-1];
        let current  = tempArr[i];
        let next     = tempArr[i+1];
        if(previous === first && current === second) {
            if(next) {
                output.push(next);
            }
        }
    }  
    return output;
}

console.log(bigramOccurrences("alice is a good girl she is a good student","a","good"));