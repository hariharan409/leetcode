
/**
 * 
 * @param {Array} list1 
 * @param {Array} list2 
 */
const minIndexSumOfTwoList = (list1,list2) => {
    let minIndex = Infinity;
    let commonWordList = [];
    for(let word of list1) {
        if(list2.includes(word)) {
            let min = list1.indexOf(word) + list2.indexOf(word);
            if(min === minIndex) {
                commonWordList.push(word);
            } else if( min < minIndex) {
                minIndex = min;
                commonWordList = [word];
            }
        }
    }
    return commonWordList;
}

console.log(minIndexSumOfTwoList(list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]));