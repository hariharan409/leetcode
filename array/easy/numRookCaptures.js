/**
 * @param {character[][]} board
 * @return {number}
 */
const numRookCaptures = function(board) {
    let rookPosition = [];
    let pawnsAttackCount = 0;
    for(let i=0;i<board.length;i++) {
        let index = board[i].indexOf("R");
        if(index !== -1) {
            rookPosition = [i,index];
        }
    }

    // check the top
    let t = rookPosition[0];

    while(t > 0) {
        if(board[t-1][rookPosition[1]] === "B") {
            break;
        } else if(board[t-1][rookPosition[1]] === "p") {
            pawnsAttackCount++;
            break;
        }
        t--;
    }

    // check the bottom
    let b = rookPosition[0];

    while(b < board.length - 1) {
        if(board[b+1][rookPosition[1]] === "B") {
            break;
        } else if(board[b+1][rookPosition[1]] === "p") {
            pawnsAttackCount++;
            break;
        }
        b++;
    }

    // check the left
    let l = rookPosition[1];

    while(l > 0) {
        if(board[rookPosition[0]][l - 1] === "B") {
            break;
        } else if(board[rookPosition[0]][l - 1] === "p") {
            pawnsAttackCount++;
            break;
        }
        l--;
    }

    // check the right
    let r = rookPosition[1];

    while(r < board.length - 1) {
        if(board[rookPosition[0]][r + 1] === "B") {
            break;
        } else if(board[rookPosition[0]][r + 1] === "p") {
            pawnsAttackCount++;
            break;
        }
        r++;
    }

    return pawnsAttackCount;
};

console.log(numRookCaptures(
    board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
))