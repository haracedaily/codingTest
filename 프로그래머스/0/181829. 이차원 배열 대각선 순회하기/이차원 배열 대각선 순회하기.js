function solution(board, k) {
    return board.map((el,i)=>el.filter((ele,idx)=>i+idx<=k)).flat().reduce((a,b)=>a+b);
}