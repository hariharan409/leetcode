
/**
 * 
 * @param {String} address 
 */
const defangingAnIPAddress = (address) => {
    return address.replaceAll(".","[.]");
}

console.log(defangingAnIPAddress(address = "1.1.1.1"));