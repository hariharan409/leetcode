
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const jewelsAndStones = (jewels,stones) => {
    let jewelStones = stones.split("").filter((stone) => jewels.includes(stone)).length;
    return jewelStones;
}

console.log(jewelsAndStones(jewels = "aA", stones = "aAAbbbb"));