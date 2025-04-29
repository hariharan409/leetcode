/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = (bits) => {
    let i = 0;
    while (i < bits.length - 1) {
        if (bits[i] === 1) {
            i += 2; // Jump over the next bit
        } else {
            i += 1; // Move to next bit
        }
    }
    return i === bits.length - 1;
};

console.log(isOneBitCharacter(bits = [1,0,0]));