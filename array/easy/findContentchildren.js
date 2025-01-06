/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b); // Sort greed factors
  s.sort((a, b) => a - b); // Sort cookie sizes

  let i = 0; // pointer for children
  let j = 0; // pointer for cookies
  let maxNumber = 0;

  while(i < g.length && j < s.length) {
    if(s[j] >= g[i]) {
      maxNumber++;
      i++;
    }
    j++;
  }

  return maxNumber;
};