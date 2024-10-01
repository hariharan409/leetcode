
/**
 * @param {string[]} originalArr
 * @return {number}
 */
const numberOfSeniorCitizens = (originalArr) => {
    let count = 0;
    for(let str of originalArr) {
        let age = str.substring(11,13);
        if(parseInt(age) > 60) {
            count++;
        }
    }
    return count;
}

console.log(numberOfSeniorCitizens(["7868190130M7522","5303914400F9211","9273338290F4010"]));