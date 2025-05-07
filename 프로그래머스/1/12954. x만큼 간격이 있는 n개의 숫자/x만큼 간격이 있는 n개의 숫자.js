function solution(x, n) {
    var answer = Array(n).fill(x);
    return answer.map((el,idx)=>el+(idx*x));
}