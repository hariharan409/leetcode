
/**
 * 
 * @param {String} s 
 */
const makeStrGreat = (s) => {
    let sArr = s.split("");
    let stack = []; // Use a stack to manage characters

    for (let char of sArr) {
        // If the stack is not empty and the current character matches the top of the stack (case-insensitive)
        if (stack.length > 0 && (stack[stack.length - 1].toLowerCase() === char.toLowerCase()) && (stack[stack.length - 1] !== char)) {
            stack.pop(); // Remove the last character from the stack
        } else {
            stack.push(char); // Add the current character to the stack
        }
    }

    return stack.join(""); // Join remaining characters to form the result
}

console.log(makeStrGreat(s = "abBAcC"));