
/**
 * 
 * @param {String} moves 
 */
const robotReturnToOrigin = (moves) => {
    let frequencyMap = {
        "L" : 0,"R": 0,"U": 0,"D": 0
    };
    
    for(let i=0;i<moves.length;i++) {
        frequencyMap[moves[i]] = (frequencyMap[moves[i]] || 0) + 1;    
    }

    if((frequencyMap["L"] !== frequencyMap["R"]) || (frequencyMap["U"] !== frequencyMap["D"])) {
        return false;
    }
    return true;
}

console.log(robotReturnToOrigin(moves = "DURDLDRRLL"));