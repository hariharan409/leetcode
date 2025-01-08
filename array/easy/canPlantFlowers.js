

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // Loop through each plot in the flowerbed
    for (let i = 0; i < flowerbed.length; i++) {
        // Check if:
        // 1. We still need to plant flowers (n > 0)
        // 2. The previous plot (i-1) is not planted (flowerbed[i-1] !== 1 or undefined at the start)
        // 3. The current plot is empty (flowerbed[i] === 0)
        // 4. The next plot (i+1) is not planted (flowerbed[i+1] !== 1 or undefined at the end)
        if (n > 0 && flowerbed[i - 1] !== 1 && flowerbed[i] !== 1 && flowerbed[i + 1] !== 1) {
        // Plant a flower in the current plot
        flowerbed[i] = 1;
        // Decrement the number of flowers left to plant
        n--;
        }
    }

    // If n > 0, it means not all flowers could be planted, so return false
    // Otherwise, return true
    return n > 0 ? false : true;
};
  
  console.log(canPlaceFlowers(flowerbed = [0,0,1,0,1], n = 1));