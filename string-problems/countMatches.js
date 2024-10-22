
/**
 * 
 * @param {Array} items 
 * @param {String} ruleKey 
 * @param {String} ruleValue 
 * @returns 
 */
const countMatches = (items,ruleKey,ruleValue) => {
    let ruleIndex = (ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2);
    return items.filter((item) => item[ruleIndex] === ruleValue).length;
}

console.log(countMatches(items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"));