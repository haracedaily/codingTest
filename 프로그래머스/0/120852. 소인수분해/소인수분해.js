function solution(n) {
    var answer = [];
    let i = 2;
    while(n>1){
        
        if(n%i==0){
            answer.push(i);
               n=n/i;
            i--;
        }
        i++;
    }
    return [...new Set(answer)];
}