
/**
 * 
 * @param {String} s 
 */
const reverseWordInAString = (s) => {
    let arr = s.split(" ");
    for(let i=0;i<arr.length;i++) {
        let item = arr[i].split("");
        let left = 0,right = item.length - 1;
        while(left < right) {
            [item[left],item[right]] = [item[right],item[left]];
            left++;
            right--;
        }
        arr[i] = item.join("");
    }
    return arr.join(" ");
}

console.log(reverseWordInAString(s = "Let's take LeetCode contest"));