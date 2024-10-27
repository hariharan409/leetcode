
/**
 * 
 * @param {String} rings 
 */
const ringsAndRods = (rings) => {
    let frequencyList = new Array(10).fill("");
    let count = 0;

    for(let i=1;i<rings.length;i+=2) {
        frequencyList[rings[i]] = frequencyList[rings[i]] += rings[i-1];
    }

    for(let word of frequencyList) {
        if(word.match(/(?=.*R)(?=.*G)(?=.*B)[RGB]{3}/g)) {
            count++;
        }
    }
    return count;
}

console.log(ringsAndRods(rings = "B0B6G0R6R0R6G9"));