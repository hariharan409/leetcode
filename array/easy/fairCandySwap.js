/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
const fairCandySwap = (aliceSizes, bobSizes) => {
    let aliceCandyCount = aliceSizes.reduce((prev,curr) => prev + curr,0);
    let bobCandyCount = bobSizes.reduce((prev,curr) => prev + curr,0);

    if(aliceCandyCount === bobCandyCount) return [0,0];

    for(let i=0;i<aliceSizes.length;i++) {
        for(let j=0;j<bobSizes.length;j++) {
            if((aliceCandyCount - aliceSizes[i] + bobSizes[j]) === (bobCandyCount - bobSizes[j] + aliceSizes[i])) {
                return [aliceSizes[i],bobSizes[j]]
            }
        }
    }
};

console.log(fairCandySwap(aliceSizes = [2], bobSizes = [1,3]));