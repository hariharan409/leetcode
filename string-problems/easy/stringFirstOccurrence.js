/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const stringFirstOccurrence = (haystack,needle) => {
    if(haystack.includes(needle)) {
        return haystack.indexOf(needle);
    }
    return -1;
}

console.log(stringFirstOccurrence("mississippi",'issip'));