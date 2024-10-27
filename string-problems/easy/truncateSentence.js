
/**
 * 
 * @param {String} s 
 * @param {Number} k 
 */
const truncateSentence = (s,k) => {
    return s.split(" ").slice(0,k).join(" ");
}

console.log(truncateSentence(s = "Hello how are you Contestant", k = 4));