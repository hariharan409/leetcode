

const findCommonChar = (wordsList) => {
    if(wordsList.length === 0) return [];
    let refWord = wordsList[0];
    let refIndex = 0;
    let finalArr = [];
    while(refIndex < refWord.length) {
        let isCommon = true;
        for(let word of wordsList) {
            if(!word.includes(refWord[refIndex])) {
                isCommon = false;
                break;
            }
        }
        if(isCommon) finalArr.push(refWord[refIndex]);
        /* REPLACE THE CHAR WITH  _(UNDERSCORE) WHICH ARE ALREADY TRAVERSED */
        wordsList = wordsList.map((word) => word.replace(refWord[refIndex],"_"));
        refIndex++;
    }
    return finalArr;
}

/* ANOTHER OPTIMIZED APPROACH */
const findCommonChar2 = (wordsList) => {
    if(wordsList.length === 0) return [];
    let finalArr = [];
    for(let letter of wordsList[0]) {
        if(wordsList.every((word) => word.includes(letter))) {
            finalArr.push(letter);
            wordsList = wordsList.map((word) => word.replace(letter,"_"));
        }
    }
}

console.log(findCommonChar(["bella","label","roller"]));