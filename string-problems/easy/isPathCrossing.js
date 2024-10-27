
/**
 * 
 * @param {String} path 
 */
const isPathCrossing = (path) => {
    // Start at the origin (0, 0)
    let x = 0, y = 0;
    const visited = new Set();

    visited.add(`${x},${y}`);

    for(let dir of path) {
        // Move according to the direction
        if(dir === "E") x++;
        if(dir === "W") x--;
        if(dir === "N") y++;
        if(dir === "S") y--;

         // Check if the new position has already been visited
         const position = `${x},${y}`;

         if(visited.has(position)) {
            return true;
         }

         // Add the new position to the set of visited positions
        visited.add(position);
    }
    return false; // No crossing detected
}

console.log(isPathCrossing(path = "NESWW"));