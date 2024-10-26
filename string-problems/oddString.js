
/**
 * 
 * @param {String} words 
 */
const oddString = (words) => {
    let frequencyMap = {};

    // Iterate over each word to calculate its difference array
    for(let word of words) {
        let tempArr = [];
        
        // Calculate the difference array for the current word
        for(let i = 1; i < word.length; i++) {
            let difference = word[i].charCodeAt(0) - word[i-1].charCodeAt(0);
            tempArr.push(difference);
        }
        
        // Join the differences into a string to use as a key in the frequency map
        let temp = tempArr.join(",");
        
        // If this difference pattern already exists, increment its count
        if (frequencyMap[temp]) {
            frequencyMap[temp].count++;
            continue;
        }

        // Otherwise, store the word and set the initial count to 1
        frequencyMap[temp] = {
            name: word,
            count: 1
        };
    }

    // Iterate over the frequency map to find the unique pattern
    for (let key in frequencyMap) {
        if (frequencyMap[key].count === 1) {
            return frequencyMap[key].name;  // Return the word with the unique difference pattern
        }
    }
}

console.log(oddString(words = ["abm","bcn","alm"]));