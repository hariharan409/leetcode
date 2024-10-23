
/**
 * 
 * @param {String} s 
 */
const areNumbersAscending = (s) => {
  // Use regex to match all digits in the string
  s = s.match(/\d+/g).map(Number);
  let ref = s[0];

  for(let i=1;i<s.length;i++) {
    if(ref < s[i]) {
        ref = s[i];
    } else {
        return false;
    }
  }
  return true;
}

console.log(areNumbersAscending(s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"));