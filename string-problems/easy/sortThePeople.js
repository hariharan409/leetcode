
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortThePeople = (names,heights) => {
    let tempArr = [];
    names.forEach((name,index) => {
        tempArr.push({name: name,height: heights[index]});
    });
    tempArr.sort((a,b) => b.height - a.height);
    
    return tempArr.map((obj) => obj.name) ;
}

console.log(sortThePeople(names = ["Mary","John","Emma"], heights = [180,165,170]));