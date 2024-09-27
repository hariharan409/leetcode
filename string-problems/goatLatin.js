
/**
 * @param {string} sentence
 * @return {string}
 */
const goatLatin = (sentence) => {
    let seperatedArr = sentence.split(" ");
    const vowels = /[aeiouAEIOU]/g;

    for(let i=0;i<seperatedArr.length;i++) {
        let tempWord = seperatedArr[i]
        if(tempWord[0].match(vowels)) {
            tempWord = tempWord.concat("ma");
        } else {
            tempWord = tempWord.concat(tempWord[0]+"ma").replace(tempWord[0],"");
        }

        let repeatAChar = "a".repeat(i+1);
        seperatedArr[i] = tempWord.concat(repeatAChar);
    }
    return seperatedArr.join(" ");
}

console.log(goatLatin("I speak Goat Latin"));