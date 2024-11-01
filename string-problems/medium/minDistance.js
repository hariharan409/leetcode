
/**
 * 
 * @param {String} word1 
 * @param {String} word2 
 */
const minDistance = (word1,word2) => {
    let count = 0;
    let word1Arr = word1.split("");
    let word2Arr = word2.split("");

    count += Math.abs(word1Arr.length - word2Arr.length);
    let indexList = [];

    for(let i=1;i<word2Arr.length;i++) {
        let char1 = word1Arr.indexOf(word2Arr[i-1]);
        let char2 = word1Arr.indexOf(word2Arr[i]);

        if(char1 === -1) {
            word1Arr.unshift(word2Arr(i-1));
            char1 = 0;
            count++;
        }
        if(char2 === -1) {
            word1Arr = word1Arr.slice(0,char1 + 1).concat(word2Arr[i]).concat(word1Arr.slice(char1));
            char2 = word1Arr.indexOf(word2Arr[i]);
            count++;
        }
        if(char1 > char2) {
            let temp = word1Arr[char1];
            word1Arr[char1] = word1Arr[char2];
            word1Arr[char2] = temp;
            count++;
        }
        indexList.push(char1,char2);
    }
    return count;
}

console.log(minDistance(word1 = "intention", word2 = "execution"));