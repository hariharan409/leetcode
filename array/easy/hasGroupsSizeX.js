/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    if (deck.length < 2) return false;

    let freqMap = {};
    for (let num of deck) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    const counts = Object.values(freqMap);

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    let g = counts[0];
    for (let count of counts) {
        g = gcd(g, count);
    }

    return g >= 2;
};

console.log(hasGroupsSizeX(deck = [1,1,1,1,2,2,2,2,2,2]));