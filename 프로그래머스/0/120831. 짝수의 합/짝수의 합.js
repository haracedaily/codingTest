function solution(n) {
    let i = 0;
    let answer = 0;
    while (i < n){
        i++;
        if(i%2==0){
            answer+=i;
        }
    }
    
    return answer;
}