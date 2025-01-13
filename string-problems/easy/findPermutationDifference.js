

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

 // time complexity - O(n square)
 var findPermutationDifference = function(s, t) {
    let totalSum = 0;

    for(let i=0;i<s.length;i++) {
        let sIndex = s.indexOf(s[i]);
        let tIndex = t.indexOf(s[i]);

        if(sIndex !== -1 && tIndex !== -1) {
            let absDiff = Math.abs(sIndex - tIndex);
            totalSum += absDiff;
        }
    }
    return totalSum;
};

// time complexity - O(n)
function permutationDifference(s, t) {
    let totalSum = 0;

    // Pre-compute the indices of characters in s
    const sIndexMap = {};
    for (let i = 0; i < s.length; i++) {
        sIndexMap[s[i]] = i;
    }

    // Calculate permutation difference
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        const sIndex = sIndexMap[char];
        totalSum += Math.abs(sIndex - i);
    }

    return totalSum;
}

console.log(findPermutationDifference(s = "abc", t = "bac"));