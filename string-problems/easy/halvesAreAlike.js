
/**
 * 
 * @param {String} s 
 */
const halvesAreAlike = (s) => {
    let middle = s.length/2;
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);
    let count1 = s.slice(0,middle).split("").filter((char) => vowelsSet.has(char.toLowerCase())).length;
    let count2 = s.slice(middle).split("").filter((char) => vowelsSet.has(char.toLowerCase())).length;
    return count1 === count2;
}

console.log(halvesAreAlike("textbook"));