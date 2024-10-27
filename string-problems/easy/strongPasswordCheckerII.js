
/**
 * 
 * @param {String} password 
 */
const strongPasswordCheckerII = (password) => {
    if(password.length < 8 || !password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/[0-9]/) || !password.match(/[!@#$%^&*()\-+]/)) {
        return false;
    }

    for(let i=1;i<password.length;i++) {
        if(password[i] === password[i-1]) {
            return false;
        }
    }
    return true;
}

console.log(strongPasswordCheckerII(password = "-Aa1a1a1"));