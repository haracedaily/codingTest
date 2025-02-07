function solution(a, b) {
    var answer = a+""+b>=2*a*b?Number(a+""+b):2*a*b;
    return answer;
}