
/**
 * 
 * @param {String} s 
 * @param {String} c 
 */
const shortestDistanceToAChar = (s,c) => {
    let indexList = [];
    let shortestDistance = [];

    for(let i=0;i<s.length;i++) {
        if(s[i] === c) indexList.push(i);
    }

    for(let i=0;i<s.length;i++) {
        shortestDistance.push(Math.min(...indexList.map((index) => Math.abs(index - i))));
    }
    return shortestDistance;
}

console.log(shortestDistanceToAChar(s = "loveleetcode", c = "e"));