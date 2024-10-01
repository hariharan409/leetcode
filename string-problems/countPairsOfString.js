
/**
 * @param {string[]} originalArr
 * @return {number}
 */
const countPairsOfString = (originalArr) => {
    let uniqueCharSets = originalArr.map((str) => new Set(str));
    let count = 0;

    for(let i=0;i<uniqueCharSets.length;i++) {
        for(let j=i+1;j<uniqueCharSets.length;j++) {
            if(isSameSet(uniqueCharSets[i],uniqueCharSets[j])) {
                count++;
            }
        }
    }
    return count;
}

const isSameSet = (set1,set2) => {
    if(set1.size !== set2.size) return false;
    for(let char of set1) {
        if(!(set2.has(char))) return false;
    }
    return true;
}

console.log(countPairsOfString(["aba","aabb","abcd","bac","aabc"]));