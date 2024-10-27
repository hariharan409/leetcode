
/**
 * 
 * @param {String} name 
 * @param {String} typed 
 */
const longPressedName = (name,typed) => {
    let nameIndex = 0;
    
    for (let i = 0; i < typed.length; i++) {
        if (name[nameIndex] === typed[i]) {
            nameIndex++;
        } else if (typed[i] !== name[nameIndex - 1]) {
            return false;
        }
    }
    
    return nameIndex === name.length;
}

console.log(longPressedName(name = "alexd", typed = "ale"));