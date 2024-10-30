
/**
 * 
 * @param {String} version1 
 * @param {String} version2 
 */
const compareVersion = (version1,version2) => {
    let v1Arr = version1.split(".");
    let v2Arr = version2.split(".");

    for(let i=0;i<(Math.max(v1Arr.length,v2Arr.length));i++) {
        let v1 = v1Arr[i] ? parseInt(v1Arr[i]) : 0;
        let v2 = v2Arr[i] ? parseInt(v2Arr[i]) : 0;
        if(v1 > v2) return 1;
        if(v1 < v2) return - 1;
    }
    return 0;
}

console.log(compareVersion(version1 = "1.0.1", version2 = "1"));