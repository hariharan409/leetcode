
/**
 * 
 * @param {String} s 
 */
const decryptStrFromAlphabet = (s) => {
    let decryptedStr = "";
    let pointer1 = 0;
    let sArr = s.split("");
    let integerMapping = { "1": "a", "2": "b", "3": "c", "4": "d", "5": "e", "6": "f", "7": "g", "8": "h", "9": "i", "10#": "j", 
        "11#": "k", "12#": "l", "13#": "m", "14#": "n", "15#": "o", "16#": "p", "17#": "q", "18#": "r", "19#": "s", "20#": "t", 
        "21#": "u", "22#": "v", "23#": "w", "24#": "x", "25#": "y", "26#": "z" };

    while(pointer1 < sArr.length) {
        // Check if there's a '#' 2 positions ahead
        if(pointer1 + 2 < s.length && sArr[pointer1 + 2] === "#") {
            let value = integerMapping[sArr.slice(pointer1,pointer1 + 3).join("")];
            decryptedStr += value;
            pointer1 += 3; // Move 3 places forward
        } else {
            // Handle single-digit numbers
            let value = integerMapping[sArr[pointer1]];
            decryptedStr += value;
            pointer1 += 1; // Move 3 places forward
        }
    }
    return decryptedStr;
}

console.log(decryptStrFromAlphabet(s = "1326#"));