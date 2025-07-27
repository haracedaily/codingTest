function solution(num) {
    let cnt = 0;
    if(num==1)return 0;
    while(cnt<500){
        num=num%2==0?num/2:num*3+1;
        cnt+=1;
        if(num==1){       
           return cnt;
        }
    }
    return -1;
}