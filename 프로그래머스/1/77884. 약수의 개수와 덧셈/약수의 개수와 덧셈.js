function solution(left, right) {
    let deg = [];
    for(let i=left;i<=right;i++){
        deg.push(i);
    }
    return deg.reduce((a,b)=>{
        let cnt =0;
       for(let i=1;i<=b;i++)
           if(b%i==0)cnt++
       return cnt%2==0?a+b:a-b
    },0);
}