
/**
 * 
 * @param {String} s 
 */
//APPROACH 1
const removeOutermostParentheses = (s) => {
    let finalStr = "";
    let subArr = [];
    let count = {open: 0,close: 0};

    for(let i=0;i<s.length;i++) {
        if(s[i] === "(") {
            count.open++;
        } else {
            count.close++;
        }
        subArr.push(s[i]);
        
        if(count.open === count.close) {
            count = {open: 0,close: 0};
            subArr.shift();
            subArr.pop();
            finalStr += subArr.join("");
            subArr.length = 0;
        }
    }
    return finalStr;
}

//APPROACH 2
// const removeOutermostParentheses = (s) => {
//     let finalStr = "";
//     let depth = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "(") {
//             if (depth > 0) finalStr += "(";  // Add to finalStr only if it's not the outermost '('
//             depth++;
//         } else {
//             depth--;
//             if (depth > 0) finalStr += ")";  // Add to finalStr only if it's not the outermost ')'
//         }
//     }

//     return finalStr;
// }

console.log(removeOutermostParentheses(s = "(()())(())"));