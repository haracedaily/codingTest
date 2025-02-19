function solution(balls, share) {
    return Math.round(factorial(balls)/(factorial((balls-share))*factorial(share)));
}

function factorial(a,res){
    if(a<=1) return 1;
    if(!res)res=a;
    for(let i = a-1;i>1;i--){
        res*=i;
    }
    return res;
}