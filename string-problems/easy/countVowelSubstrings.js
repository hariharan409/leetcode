
/**
 * 
 * @param {String} word 
 */
const countVowelSubstrings = (word) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    // Helper function to check if a character is a vowel
    const isVowel = (char) => vowels.has(char);

    for(let i=0;i<word.length;i++) {
        // Only start the check when the character is a vowel
        if(isVowel(word[i])) {
            let vowelSet = new Set();
            // Extend the substring from i onward
            for(let j=i;j<word.length;j++) {
                if(isVowel(word[j])) {
                    vowelSet.add(word[j]);
                    if (vowelSet.size === 5) {
                        count++;
                    }
                } else {
                    break;
                }
            }
        }
    }

    return count;
}

console.log(countVowelSubstrings(word ="aeiouu"));