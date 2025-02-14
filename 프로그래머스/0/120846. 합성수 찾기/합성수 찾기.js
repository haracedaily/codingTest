function solution(n) {
   let answer = n>=4?(n>=7?((n-7)%6===0?parseInt((n-3)/6*4):Math.round((n-3)/6*4)):Math.round((n-3)/6*4)):0;
    n>=95?answer+=9:(n>=91?answer+=8:(n>=85?answer+=7:(n>=77?answer+=6:(n>=65?answer+=5:(n>=55?answer+=4:(n>=49?answer+=3:(n>=35?answer+=2:(n>=25?answer++:answer))))))));
    
   
    return answer;
}