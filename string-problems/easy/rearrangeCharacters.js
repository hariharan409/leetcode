
/**
 * 
 * @param {String} s 
 * @param {String} target 
 */
const rearrangeCharacters = (s,target) => {
    let strFrequencyMap = {};

    for(let i=0;i<s.length;i++) {
        if(target.includes(s[i])) {
            strFrequencyMap[s[i]] = (strFrequencyMap[s[i]] || 0) + 1;
        }
    }

    let targetFrequencyMap = {};

    for(let i=0;i<target.length;i++) {
        targetFrequencyMap[target[i]] = (targetFrequencyMap[target[i]] || 0) + 1;
    }

    let countArr = [];

    for(let key in targetFrequencyMap) {
        let tempCount = 0;
        while(strFrequencyMap[key] >= targetFrequencyMap[key]) {
            strFrequencyMap[key] -= targetFrequencyMap[key];
            tempCount++;
        }
        countArr.push(tempCount);
    }
    return Math.min(...countArr);
}

console.log(rearrangeCharacters(s = "ilovecodingonleetcode", target = "code"));