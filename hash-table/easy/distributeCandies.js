
/**
 * 
 * @param {Number[]} candyType 
 */
const distributeCandies = (candyType) => {
    const uniqueTypes = new Set(candyType);   // Get unique types
    const maxType = candyType.length / 2;     // Max candies Alice can eat

    // Return the minimum of unique types and maxType
    return Math.min(uniqueTypes.size, maxType);
}

console.log(distributeCandies(candyType = [1,1,2,3]));