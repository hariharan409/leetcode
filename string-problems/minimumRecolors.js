
/**
 * 
 * @param {String} blocks 
 * @param {Number} k 
 */
const minimumRecolors = (blocks,k) => {
    let minOperation = [];

    for(let i=0;i<blocks.length;i++) {
        let subStr = blocks.slice(i,i+k);
        if(subStr.length === k) {
            let count = subStr.split("").filter((char) => char === "W").length;
            minOperation.push(count);
        }
    }
    return minOperation.length === 0 ? 0 : Math.min(...minOperation);
}

console.log(minimumRecolors(blocks = "WBBWWBBWBW", k = 7));