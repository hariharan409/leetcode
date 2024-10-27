
/**
 * 
 * @param {Array} operations 
 */
const finalValueAfterOperations = (operations) => {
    let finalValue = 0;
    let mapper = {
        "--X": -1,
        "X--": -1,
        "++X": +1,
        "X++": +1
    };

    for(let operation of operations) {
       finalValue += mapper[operation]; 
    }

    return finalValue;
}

console.log(finalValueAfterOperations(operations = ["--X","X++","X++"]));