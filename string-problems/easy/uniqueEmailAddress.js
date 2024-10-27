
/**
 * 
 * @param {Array} emails 
 */
const uniqueEmailAddress = (emails) => {
    let validEmail = new Set();

    for(let email of emails) {
        let str1 = email.slice(0,(email.includes("+") ? email.indexOf("+") : email.indexOf("@"))).replaceAll(".","");
        let str2 = email.slice(email.indexOf("@"));
        
        let finalStr = str1 + str2;
        validEmail.add(finalStr); // Add to Set (no need to check for duplicates)
    }
    return validEmail.size;  // Return the size of the Set (unique email count)
}

console.log(uniqueEmailAddress(emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]));