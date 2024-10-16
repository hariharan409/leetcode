
/**
 * 
 * @param {Array} widths 
 * @param {String} s 
 */
const numberOfLinesToWriteString = (widths,s) => {
    // MAX WIDTH PER LINE = 100;
    let maxWidthPerLine = 100;
    let pixelsList = [];
    let currentLinePixels = 0;

    for(let i=0;i<s.length;i++) {
        let currentCharWidth = widths[s[i].charCodeAt(0) - 97];
        console.log(`${s[i]} - ${currentCharWidth}`);
        if(currentLinePixels + currentCharWidth > maxWidthPerLine) {
            pixelsList.push(currentLinePixels);
            currentLinePixels = 0;
        }
        currentLinePixels += currentCharWidth;
        if(i === (s.length - 1)) {
            pixelsList.push(currentLinePixels);
        }
    }
    return [pixelsList.length,pixelsList.pop()];
}

console.log(numberOfLinesToWriteString(widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "bbbcccdddaaa"));