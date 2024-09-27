
/**
 * @param {string} originalStr
 * @return {boolean}
 */
const allAappearsBeforeAllb = (originalStr) => {
    let firstIndexOfB = originalStr.indexOf("b");
    /* IF THERE IS NO b IN THE ABOVE STRING, IT SHOULD RETURN -1 */
    if(firstIndexOfB === -1) return true;
    let subStringOfB = originalStr.slice(firstIndexOfB);
    if(subStringOfB.includes('a')) {
        return false;
    }
    return true;
}

console.log(allAappearsBeforeAllb("abab"));