
/**
 * 
 * @param {String} s 
 * @param {String} t 
 */
const isomorphicString = (s,t) => {
    if (s.length !== t.length) {
        return false; // Strings must be of the same length to be isomorphic
    }
    
    let mapST = new Map(); // Map for s -> t
    let mapTS = new Map(); // Map for t -> s
    
    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];
        
        // Check s -> t mapping
        if (mapST.has(charS)) {
            if (mapST.get(charS) !== charT) {
                return false; // Inconsistent mapping
            }
        } else {
            mapST.set(charS, charT); // Set new mapping
        }
        
        // Check t -> s mapping
        if (mapTS.has(charT)) {
            if (mapTS.get(charT) !== charS) {
                return false; // Inconsistent mapping
            }
        } else {
            mapTS.set(charT, charS); // Set new mapping
        }
    }
    
    return true; // Strings are isomorphic
}

console.log(isomorphicString(s = "foo", t = "bar"));