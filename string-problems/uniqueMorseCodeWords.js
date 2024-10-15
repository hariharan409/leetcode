
/**
 * 
 * @param {Array} words 
 */
const uniqueMorseCodeWords = (words) => {
    let marseCodeMapper = {a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",
    s:"...",t:"-",u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--.."};
    const transformation = [];
    
    for(let word of words) {
        let morseCode = word.split("").map((char) => marseCodeMapper[char]).join("");
        if(!(transformation.includes(morseCode))) {
            transformation.push(morseCode);
        }
    }
    return transformation.length;
}

console.log(uniqueMorseCodeWords(words = ["gin","zen","gig","msg"]));