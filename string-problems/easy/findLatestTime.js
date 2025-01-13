/**
 * @param {string} s
 * @return {string}
 */
const findLatestTime = function(s) {
    let tempTime = s.split("");  // Split the input string into an array of characters to modify individual digits
  
    // Handle the first character of the hour (tempTime[0])
    if (tempTime[0] === "?") {
      // If the second character is "?" or a valid value for the second character (0 or 1),
      // set the first character to "1" (largest possible hour "11")
      if (tempTime[1] === "?" || ["0", "1"].includes(tempTime[1])) {
        tempTime[0] = "1";
      } else {
        // Otherwise, set the first character to "0" (largest possible hour "09")
        tempTime[0] = "0";
      }
    }
    
    // Handle the second character of the hour (tempTime[1])
    if (tempTime[1] === "?") {
      // If the first character is "0", set the second character to "9" (largest possible hour "09")
      if (tempTime[0] === "0") {
        tempTime[1] = "9";
      } else {
        // Otherwise, set the second character to "1" (largest possible hour "11")
        tempTime[1] = "1";
      }
    }
    
    // Handle the third character of the minutes (tempTime[3])
    if (tempTime[3] === "?") {
      // Set the tens place of the minute to "5" (largest possible tens digit in the range "50-59")
      tempTime[3] = "5";
    }
    
    // Handle the fourth character of the minutes (tempTime[4])
    if (tempTime[4] === "?") {
      // Set the ones place of the minute to "9" (largest possible ones digit in the range "00-59")
      tempTime[4] = "9";
    }
    
    // Join the array back into a string and return the result
    return tempTime.join("");
  };
  
  console.log(findLatestTime( s = "0?:5?"))