
/**
 * 
 * @param {String} licensePlate 
 * @param {Array} words 
 */
const shortestCompletingWord = (licensePlate,words) => {
    // Function to count character frequencies in a string
    const getCharCount = (str) => {
        const count = {};
        for(let char of str) {
            count[char] = (count[char] || 0) + 1;
        }
        return count;
    }

    // Extract only alphabetic characters from the licensePlate, ignoring case
    const requiredCount = getCharCount(licensePlate.toLowerCase().replace(/[^a-z]/g, ''));

    let shortestWord = '';
    // Iterate through each word in the list
    for (let word of words) {
        const wordCount = getCharCount(word.toLowerCase());

        // Check if the word satisfies the required letter counts
        let completes = true;
        for (let char in requiredCount) {
            if (wordCount[char] === undefined || wordCount[char] < requiredCount[char]) {
                completes = false;
                break;
            }
        }

        // If the word satisfies the condition and is the shortest, update result
        if (completes && (shortestWord === '' || word.length < shortestWord.length)) {
            shortestWord = word;
        }
    }

    return shortestWord;
}

console.log(shortestCompletingWord(licensePlate = "GrC8950", words = ["measure","other","every","base","according","level","meeting","none","marriage","rest"]));