
/**
 * 
 * @param {Array} strs 
 */
const groupAnagrams = (strs) => {
    const anagramMap = new Map();

    for(let word of strs) {
        // Sort the word to get the key
        const sortedWord = word.split('').sort().join('');

        if(anagramMap.has(sortedWord)) {
            anagramMap.get(sortedWord).push(word);
        } else {
            anagramMap.set(sortedWord,[word]);
        }
    }
    return Array.from(anagramMap.values());
}

console.log(groupAnagrams(strs = ["","",""]));