

/**
 * @param {number[]} scoreList
 * @return {string[]}
 */
var findRelativeRanks = function(scoreList) {
    // final output storage
    let rankedList = [];
   // validate the size
    if(scoreList.length === 0) return [];
    // sort the score list by descending order
    let sortedScoreList = [...scoreList].sort((a,b) => b - a);

    for(let i=0;i<scoreList.length;i++) {
        let rank = findRank(scoreList[i],sortedScoreList);
        rankedList.push(rank);
    }
    return rankedList;
};

/**
 * 
 * @param {Number} score 
 * @param {Number[]} sortedScoreList 
 */
const findRank = (score,sortedScoreList) => {
  let index = sortedScoreList.indexOf(score);

  switch(index) {
    case 0: {
      return "Gold Medal"
    }
    case 1: {
      return "Silver Medal"
    }
    case 2: {
      return "Bronze Medal";
    }
    default: {
      return (index + 1).toString();
    }
  }
}

console.log(findRelativeRanks(scoreList = [2,4,1,5,3]));

// another solution using map


/**
 * @param {number[]} scoreList
 * @return {string[]}
 */
var findRelativeRanks = function(scoreList) {
    // validate the size
     if(scoreList.length === 0) return [];
     // sort the score list by descending order
     let sortedScoreList = [...scoreList].sort((a,b) => b - a);
 
     let rankMap = new Map();
 
     for(let i=0;i<sortedScoreList.length;i++) {
         if (i === 0) {
             rankMap.set(sortedScoreList[i], "Gold Medal");
         } else if (i === 1) {
             rankMap.set(sortedScoreList[i], "Silver Medal");
         } else if (i === 2) {
             rankMap.set(sortedScoreList[i], "Bronze Medal");
         } else {
             rankMap.set(sortedScoreList[i], (i + 1).toString());
         }
     }
 
     return scoreList.map((score) => rankMap.get(score));
 };
 
 console.log(findRelativeRanks(scoreList = [2,4,1,5,3]));