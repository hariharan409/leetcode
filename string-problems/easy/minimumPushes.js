
/**
 * 
 * @param {String} word 
 */
const minimumPushes = (word) => {
    if(word.length <= 8) {
        // Each character costs 1 push
        return word.length;
    } else if(word.length <= 16) {
        // First 8 characters cost 8 pushes, next characters cost 2 pushes each
        let twoPushLength = word.length - 8;
        return 8 + (2 * twoPushLength);
    } else if(word.length <= 24) {
        // First 8 characters cost 8 pushes, next 8 characters cost 16 pushes, next characters cost 3 pushes each
        let threePushLength = word.length - 16;
        return 8 + (2 * 8) + (3 * threePushLength);
    } else {
        // First 8 characters cost 8 pushes, next 8 characters cost 16 pushes, next 8 characters cost 24 pushes, and remaining characters cost 4 pushes each
        let fourPushLength = word.length - 24;
        return 8 + (2 * 8) + (3 * 8) + (4 * fourPushLength);
    }
}

console.log(minimumPushes(word = "acolkxjbizfmhnrdq"));