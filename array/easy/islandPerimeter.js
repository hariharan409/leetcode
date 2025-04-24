
/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = (grid) => {
    let perimeter = 0;

    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<grid[i].length;j++) {
            // number of stripes in one cell
            let temp = 4;
            // represents land
            if(grid[i][j] === 1) {
                // top
                if(i > 0 && grid[i-1][j] === 1) temp--;
                // bottom
                if(i < grid.length - 1 && grid[i+1][j] === 1) temp--;
                // left 
                if(j > 0 && grid[i][j-1] === 1) temp--;
                // right
                if(j < grid[i].length - 1 && grid[i][j+1] === 1) temp--;

                perimeter += temp;
            }
        }
    }
    return perimeter;
}

console.log(islandPerimeter(
    grid = [
        [0,1]
    ]
));