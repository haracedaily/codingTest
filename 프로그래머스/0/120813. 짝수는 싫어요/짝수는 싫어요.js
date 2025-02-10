function solution(n) {
    var answer = [];
    let i=0;
    while(i<=n){
        i%2!=0?answer.push(i):0;
        i++;
    }
    return answer;
}