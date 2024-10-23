
/**
 * 
 * @param {String} s 
 * @param {Number} k 
 * @param {String} fill 
 */
const divideString = (s,k,fill) => {
    let finalArr = [];
    let dividerCount = Math.floor(s.length / k);
    let remainder = s.length % k;

    for(let i=0;i<dividerCount;i++) {
        finalArr.push(s.slice(i * k,(i * k) + k));
    }
    
    if(remainder > 0) {
        finalArr.push(s.slice(-remainder) + fill.repeat(Math.abs(remainder - k)));
    }

    return finalArr;
}

console.log(divideString(s = "gsectbwqtcc", k = 5, fill = "x"));