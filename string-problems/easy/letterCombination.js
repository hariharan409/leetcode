/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombination = (digits) => {
    const result = [];
    const digitToLetters = {
        2: ["a","b","c"],
        3: ["d","e","f"],
        4: ["g","h","i"],
        5: ["j","k","l"],
        6: ["m","n","o"],
        7: ["p","q","r","s"],
        8: ["t","u","v"],
        9: ["w","x","y","z"]
    };
    if(digits.length == 0) return [];

    const backtrack = (index,currentCombination) => {
        if(index === digits.length) {
            result.push(currentCombination.join(""));
            return;
        }

        const letters = digitToLetters[digits[index]];
        for(let letter of letters) {
            currentCombination.push(letter);
            backtrack(index+1,currentCombination);
            currentCombination.pop(); // backtrack
        }
    }
    
    backtrack(0,[]);
    return result;
}

console.log(letterCombination("234"));