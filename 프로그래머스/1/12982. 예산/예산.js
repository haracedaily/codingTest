function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>a-b).reduce((a,b,idx)=>{
        if(a+b<=budget){
            answer++;
            return a+b;
        }
        else
            return a;
    },0)
    return answer;
}