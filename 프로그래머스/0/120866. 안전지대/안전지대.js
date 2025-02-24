function solution(board) {
    board.map((el, idx) => {
        [...el].map((ele, innerIdx) => {
            if (ele == 1) {
                if (innerIdx > 0) { if (board[idx][innerIdx - 1] != 1) board[idx][innerIdx - 1] = 'b'; }
                if (board[idx][innerIdx + 1] != 1) board[idx][innerIdx + 1] = 'b';
                if (idx > 0) {
                    if (innerIdx > 0) { if (board[idx - 1][innerIdx - 1] != 1) board[idx - 1][innerIdx - 1] = 'b'; }
                    if (board[idx - 1][innerIdx] != 1) board[idx - 1][innerIdx] = 'b';
                    if (innerIdx < board[0].length - 1) { if (board[idx - 1][innerIdx + 1] != 1) board[idx - 1][innerIdx + 1] = 'b'; }
                }
                if (idx < board.length - 1) {
                    if (innerIdx > 0) { if (board[idx + 1][innerIdx - 1] != 1) board[idx + 1][innerIdx - 1] = 'b'; }
                    if (board[idx + 1][innerIdx] != 1) board[idx + 1][innerIdx] = 'b';
                    if (innerIdx < board[0].length - 1) { if (board[idx + 1][innerIdx + 1] != 1) board[idx + 1][innerIdx + 1] = 'b'; }
                }
            }
        })
    });
    return board.join("").replaceAll(",","").replaceAll("b","").replaceAll("1","").length;
}