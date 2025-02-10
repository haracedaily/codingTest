function solution(n) {
    var answer = [];
    let i = 0;
    while(i<n){
        i++;
        if(n%i==0){
            answer.push(i);
        }
    }
    return answer;
}