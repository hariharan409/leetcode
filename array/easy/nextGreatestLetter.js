
/**
 * 
 * @param {string[]} letters 
 * @param {string} target 
 */
const nextGreatestLetter = (letters,target) => {
    let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let targetIndex = alphabets.indexOf(target);
    
    for(let char of letters) {
        let charIndex = alphabets.indexOf(char);
        if(charIndex > targetIndex) {
            return char;
        }
    }
    return letters[0];
}

console.log(nextGreatestLetter(letters = ["c","f","j"], target = "a"));