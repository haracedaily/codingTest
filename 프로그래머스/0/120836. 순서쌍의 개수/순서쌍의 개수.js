function solution(n) {
    var answer = 0;
    let i = 1;
    while(i<=n){
        n%i==0?answer++:0;
        i++;
    }
    return answer;
}