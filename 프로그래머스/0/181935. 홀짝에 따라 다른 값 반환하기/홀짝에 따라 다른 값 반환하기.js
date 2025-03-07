function solution(n) {
    return n%2==0?Array(n).fill(0).reduce((a,b,idx)=>(idx+1)%2==0?a+=(idx+1)**2:a):Array(n).fill(0).reduce((a,b,idx)=>{return (idx+1)%2!=0?a+=(idx+1):a},0);
}