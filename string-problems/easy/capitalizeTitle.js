
/**
 * 
 * @param {String} title 
 */
const capitalizeTitle = (title) => {
    let titleArr = title.split(" ");
    
    for(let i=0;i<titleArr.length;i++) {
        if(titleArr[i].length > 2) {
            titleArr[i] = titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1).toLowerCase();
        } else {
            titleArr[i] = titleArr[i].toLowerCase(); 
        }
    }
    return titleArr.join(" ");
}

console.log(capitalizeTitle(title = "capiTalIze tHe titLe"));