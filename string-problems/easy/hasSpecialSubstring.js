
/**
 * 
 * @param {String} s 
 * @param {Number} k 
 */
const hasSpecialSubstring = (s,k) => {
    for(let i=0;i<s.length;i++) {
        if(s.slice(i).includes(s[i].repeat(k))) {
            let startIndex = i + s.slice(i).indexOf(s[i].repeat(k));
            let endIndex = startIndex + (k - 1);
            
            if((s[startIndex - 1] !== s[startIndex]) && (s[endIndex + 1] !== s[startIndex])) {
                return true;
            }
        }
    }
    return false;
}

console.log(hasSpecialSubstring(s = "jkjhfgg", k = 2));