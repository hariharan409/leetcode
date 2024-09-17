

const isParenthesesValid = (str1,str2) => {
    if((str1 === "(" && str2 === ")") || (str1 === "{" && str2 === "}") || (str1 === "[" && str2 === "]")) {
        return true;
    }
    return false;
}

const isValid = (parenthesesString) => {
    let stack = [];
    let parenthesesMap = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    for(let char of parenthesesString) {
        if(parenthesesMap[char]) {
            stack.push(char);
        } else {
            let lastChar = stack.pop();
            if(char !== parenthesesMap[lastChar]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid("(([]){})"))