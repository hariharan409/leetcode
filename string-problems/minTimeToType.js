
/**
 * 
 * @param {String} word 
 */
const minTimeToType = (word) => {
    let time = 0;
    let currentChar = 'a'; // Initial position of the pointer

    for(let char of word) {
        // Calculate the current and target positions in the alphabet
        let currentPos = currentChar.charCodeAt(0) - 'a'.charCodeAt(0);
        let targetPos = char.charCodeAt(0) - 'a'.charCodeAt(0);

        // Calculate clockwise and counterclockwise distances
        let clockwiseDistance = Math.abs(targetPos - currentPos);
        let counterclockwiseDistance = 26 - clockwiseDistance;

        // Add the minimum movement distance and the time to type the character
        time += Math.min(clockwiseDistance, counterclockwiseDistance) + 1;
        
        // Update the current character to the newly typed character
        currentChar = char;
    }
    return time;
}

console.log(minTimeToType(word = "cbc"));