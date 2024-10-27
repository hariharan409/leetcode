

const removeElements = (nums,val) => {
    let k = 0; // Initialize pointer for the next valid position

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Move non-val element to the front
            k++; // Increment the count of valid elements
        }
    }

    return k; // Return the number of valid elements
}

console.log(removeElements([3,2,2,3],3));