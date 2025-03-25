function solution(s){
    var answer = 0;

    for (let char of s){
        if(char=='('){
            answer++;
        }
        if(char==')'){
            if(answer>0){
                answer--;
            }else{
                answer=1;
                break;
            }
        }
    }

    return !answer;
}