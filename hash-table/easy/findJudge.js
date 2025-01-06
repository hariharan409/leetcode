
/**
 * 
 * @param {Number} n 
 * @param {Array[Number[]]} trust 
 */
const findJudge = (n,trust) => {
    if (trust.length < n - 1) return -1; // Not enough trust relationships for a judge to exist.

    const trustCounts = Array(n + 1).fill(0); // To keep trust count for each person

    for (let [a, b] of trust) {
        trustCounts[a]--; // a trusts someone, decrease their score
        trustCounts[b]++; // b is trusted, increase their score
    }

    for (let i = 1; i <= n; i++) {
        if (trustCounts[i] === n - 1) {
            return i; // Found the judge
        }
    }

    return -1; // No judge found
}

console.log(findJudge(n = 3, trust = [[1,3],[2,3]]));