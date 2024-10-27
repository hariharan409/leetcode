
/**
 * 
 * @param {String} moves 
 */
const furthestDistanceFromOrigin = (moves) => {
    let leftMoves = 0, rightMoves = 0, underscores = 0;

    // Count L, R, and _ moves
    for (let move of moves) {
        if (move === 'L') {
            leftMoves++;
        } else if (move === 'R') {
            rightMoves++;
        } else if (move === '_') {
            underscores++;
        }
    }

    // Calculate the furthest distance by moving all underscores in one direction
    return Math.abs(leftMoves + underscores - rightMoves);
}

console.log(furthestDistanceFromOrigin(moves = "L_RL__R"));