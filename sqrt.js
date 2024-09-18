

const sqrt = (number) => {
    return Math.floor(Math.sqrt(number));
}

/* CUSTOMIZED ALGO TO FIND SQRT OF THE NUMBER */
function mySqrt(x) {
    if (x < 2) {
        return x;
    }

    let left = 0;
    let right = x;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
}

console.log(sqrt(4));