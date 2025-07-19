function solution(a, b) {
    var answer = 0;
    let min = a>=b?b:a;
    let max = b>=a?b:a;
    for(let i = min; i<=max;i++)answer+=i;
    return answer;
}