

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let tempArray = [];

    for(let i=0;i<operations.length;i++) {
      // Record a new score of x.
      if(!isNaN(operations[i])) {
        tempArray.push(parseInt(operations[i]));
      } 
      // Record a new score that is the sum of the previous two scores.
      if(operations[i] === "+") {
        let tempSum = tempArray[tempArray.length - 2] + tempArray[tempArray.length - 1];
        tempArray.push(tempSum);
      }
      // Record a new score that is the double of the previous score.
      if(operations[i] === "D") {
        let tempDouble = 2 * tempArray[tempArray.length - 1];
        tempArray.push(tempDouble);
      }
      // removing it from the record.
      if(operations[i] === "C") {
        tempArray.pop();
      }
    }

    return tempArray.reduce((prev,curr) => prev + curr,0);
};

console.log(calPoints(ops = ["5","2","C","D","+"]));

/*

An integer x.
Record a new score of x.
'+'.
Record a new score that is the sum of the previous two scores.
'D'.
Record a new score that is the double of the previous score.
'C'.
Invalidate the previous score, removing it from the record.

*/