
/**
 * 
 * @param {Number} num 
 * @returns 
 */
const intToRoman = (num) => {
    // Define the Roman numeral mappings in decreasing order
    const romanMappings = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let result = "";

    // Iterate over each Roman numeral mapping
    for (const { value, symbol } of romanMappings) {
        // While the current value can be subtracted from num
        while (num >= value) {
            result += symbol; // Append the symbol to the result
            num -= value;     // Subtract the value from num
        }
    }

    return result;
}

console.log(intToRoman(3749));