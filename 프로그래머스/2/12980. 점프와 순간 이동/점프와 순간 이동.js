function solution(n)
{
    var ans = 0;
    while(n!=0){
        if(Number.isInteger(n/2)){
        n=n/2;    
        }else{
            ans+=1;
            n--; 
        }
    }
    return ans;
}