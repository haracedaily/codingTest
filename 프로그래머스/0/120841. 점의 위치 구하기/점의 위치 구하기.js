function solution(dot) {
    var answer = 1;
    dot[0]>0?(dot[1]>0?answer:answer+=3):(dot[1]>0?answer++:answer+=2);
    
    
    return answer;
}