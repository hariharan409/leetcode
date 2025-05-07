

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = (image) => {
    // brute force approach
    let tempArr = [];
    for(let i=0;i<image.length;i++) {
        //flip & invert the image
        let row = image[i].reverse().map((data) => data === 0 ? 1 : 0);
        tempArr.push(row);
    }
    return tempArr;
};

console.log(flipAndInvertImage(image = [[1,1,0],[1,0,1],[0,0,0]]));