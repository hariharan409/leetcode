

const removeDuplicatesFromSortedArray = (list) => {
    let tempIndex = 0;
    for(let i=1;i<list.length;i++) {
        if(list[i] !== list[tempIndex]) {
            tempIndex++;
            list[tempIndex] = list[i];
        }
    }
    return tempIndex+1;
}

console.log(removeDuplicatesFromSortedArray([1,1,2]));