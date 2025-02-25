let num = {};
let cnt = 0;
let i = 0;
while (i<=100){
    cnt++;
    if(cnt%3!=0&&!String(cnt).includes(3)){
        i++;
        num[i]=cnt;
    }
}

function solution(n) { 
    return num[n]
}