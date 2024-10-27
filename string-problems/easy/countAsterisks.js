
/**
 * 
 * @param {String} s 
 */
const countAsterisks = (s) => {
    let sArr = s.split("|").filter((_,index) => index % 2 === 0).join("");
    return sArr.split("").filter((char) => char === "*").length;


}

console.log(countAsterisks(s = "l|*e*et|c**o|*de|"));