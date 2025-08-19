function solution(n) {
    let answer = 0;
    let F1 = 1;
    let F2 = 1;
    if(n===1||n===2)return 1;
    else if(n===0)return 0;
    else{
        for(let i=2; i < n; i++){
            answer = (F1 + F2)%1234567;
            F1 = F2;
            F2 = answer;
        }
    }
    return answer;
}