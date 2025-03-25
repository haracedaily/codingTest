function solution(A,B){
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    let res = new Array(A.length);
    A.map((el,idx)=>res[idx]=el*B[idx]);
    return res.reduce((a,b)=>a+b);
}