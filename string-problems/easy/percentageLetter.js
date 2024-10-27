
/**
 * 
 * @param {String} s 
 * @param {String} letter 
 */
const percentageLetter = (s,letter) => {
    let length = s.length;
    let letterCount = s.split("").filter((char) => char === letter).length;
    let percentage = 0;

    if(letterCount > 0) {
        percentage = Math.floor((letterCount / length) * 100);
    }
    return percentage;
}

console.log(percentageLetter(s = "kue", letter = "e"));