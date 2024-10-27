
/**
 * 
 * @param {String} s1 
 * @param {String} s2 
 */
const areAlmostEqual = (s1,s2) => {
    if (s1 === s2) return true;  // If both strings are already equal

    let mismatch = [];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            mismatch.push([s1[i], s2[i]]);
        }
    }

    // There must be exactly 2 mismatches and they should be swappable
    return mismatch.length === 2 &&
           mismatch[0][0] === mismatch[1][1] &&
           mismatch[0][1] === mismatch[1][0];
}

console.log(areAlmostEqual(s1 = "siyolsdcjthwsiplccjbuceoxmpjgrauocx", s2 = "siyolsdcjthwsiplccpbuceoxmjjgrauocx"));