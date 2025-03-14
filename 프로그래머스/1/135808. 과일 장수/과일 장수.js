function solution(k, m, score) {
    return score.sort((a,b)=>b-a).reduce((a,b,i,ary)=>(i+1)%m==0?a+b*m:a,0);
}