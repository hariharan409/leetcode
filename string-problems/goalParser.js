
/**
 * 
 * @param {String} command 
 */
const goalParser = (command) => {
    let finalStr = "";
    let mapper = {"G": "G","()": "o","(al)": "al"};
    let splittedArr = command.match((/G|\(\)|\(al\)/g));
    for(let str of splittedArr) {
        finalStr += mapper[str];
    }
    return finalStr;

}

console.log(goalParser(command = "G()(al)"));