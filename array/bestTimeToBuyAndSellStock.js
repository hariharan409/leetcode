
/**
 * @param {number[]} priceList
 * @return {number}
 */
const bestTimeToBuyAndSellStock = (priceList) => {
    let minPrice = Infinity;
    let maxProfit = 0;
    for(let price of priceList) {
        if(price < minPrice) {
            // Update minPrice if current price is lower
            minPrice = price;
        } else {
            // Calculate max profit
            maxProfit = Math.max(maxProfit,price - minPrice);
        }
    }
    return maxProfit;
}

console.log(bestTimeToBuyAndSellStock(priceList = [7,6,4,3,1]));