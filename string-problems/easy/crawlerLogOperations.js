
/**
 * @param {string[]} logs
 * @return {number}
 */

// solve using greedy algorithm
// const crawlerLogOperations = (logs) => {
//     let operationCount = 0;
//     for(let log of logs) {
//         if(log === "../") {
//             operationCount > 0 && operationCount--; // Go up one folder if not in the main folder
//         } else if(log === "./") {
//             continue; // Stay in the same folder, do nothing
//         } else {
//             operationCount++; // Go into a child folder
//         }
//     }
//     return operationCount; // Number of steps needed to return to the main folder
// }

// solve using stack:
const crawlerLogOperations = (logs) => {
    let stack = [];
    for(let log of logs) {
        if(log === "../") {
            stack.length > 0 && stack.pop(); // Go up one folder if not in the main folder
        } else if(log === "./") {
            continue; // Stay in the same folder, do nothing
        } else {
            stack.push(log); // Go into a child folder
        }
    }
    return stack.length; // Number of steps needed to return to the main folder
}
console.log(crawlerLogOperations(logs = ["./","../","./"]))