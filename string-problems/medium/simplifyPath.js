
/**
 * 
 * @param {String} path 
 */
const simplifyPath = (path) => {
    const pathArr = path.split("/").filter((word) => word);
    const stack = [];

    for (let i = 0; i < pathArr.length; i++) {
        if (pathArr[i] === "..") {
            // Go up one directory if possible
            if (stack.length > 0) {
                stack.pop();
            }
        } else if (pathArr[i] !== ".") {
            // Add valid directory or file name
            stack.push(pathArr[i]);
        }
    }

    // Join stack to form the simplified path
    return "/" + stack.join("/");
}

console.log(simplifyPath(path = "/home/user/Documents/../Pictures"));