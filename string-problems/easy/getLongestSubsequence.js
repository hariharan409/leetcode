/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
const getLongestSubsequence = function(words, groups) {
    let tempList = [0];
    let ref = groups[0];
    for(let i=1;i<groups.length;i++) {
      if(ref !== groups[i]) {
        tempList.push(i);
        ref = Number(!ref);
      }
    } 
    return tempList.map((index) => words[index]);  
  };
  
  console.log(getLongestSubsequence(words = ["d","a","v","b"], groups = [1,0,0,1]));