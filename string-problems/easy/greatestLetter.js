
/**
 * 
 * @param {String} s 
 */
const greatestLetter = (s) => {
    let largeValue = Number.MIN_VALUE;

    for(let i=0;i<s.length;i++) {
        if(s[i] === s[i].toUpperCase() && s.includes(s[i].toLowerCase()) && s.includes(s[i].toUpperCase())) {
            largeValue = Math.max(largeValue,s[i].charCodeAt(0));
        }
    }
    return largeValue !== Number.MIN_VALUE ? String.fromCharCode(largeValue) : "";
}

console.log(greatestLetter(s = "arRAzFif"));