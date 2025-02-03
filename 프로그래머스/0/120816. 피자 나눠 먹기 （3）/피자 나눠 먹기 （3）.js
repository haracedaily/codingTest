function solution(slice, n) {
    
    var answer = n>slice?Math.ceil(n/slice):1;
    return answer;
}