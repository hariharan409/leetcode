
/**
 * 
 * @param {String} s 
 * @param {Array} distance 
 */
const checkDistances = (s,distance) => {
    let mapper = {};

    for(let i=0;i<distance.length;i++) {
        mapper[String.fromCharCode(i + 97)] = distance[i];
    }

    for(let i=0;i<s.length;i++) {
        let index = s.lastIndexOf(s[i]);
        // console.log('inbetweenLetters - '+(Math.abs((i-(index - 1))))+ ' ---------- '+ 'actual distance - '+mapper[s[i]]);
        if(index !== -1 && index > i) {
            if((Math.abs(i-(index - 1)) !== mapper[s[i]])) {
                return false;
            }
        }
    }
    return true;
}

console.log(checkDistances(s = "abaccb", distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));