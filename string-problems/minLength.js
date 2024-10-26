
/**
 * 
 * @param {String} s 
 */
// const minLength = (s) => {

//     while(s.includes("AB") || s.includes("CD")) {
//         s = s.replaceAll("AB","").replaceAll("CD","");
//     }
//     return s.length;
// }

const minLength = (s) => {
    const stack = [];

    for(let char of s) {
        stack.push(char);

        const len = stack.length;

        if(len >= 2) {
            const lastTwo = stack[len - 1] + stack[len - 2];
            if(lastTwo === "AB" || lastTwo === "CD") {
                stack.pop();
                stack.pop();
            }
        }
    }
    return stack.length;
}

console.log(minLength(s = "CCCCDDDD"));