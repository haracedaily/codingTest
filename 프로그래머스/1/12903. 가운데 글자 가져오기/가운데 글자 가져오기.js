function solution(s) {
    let len = s.length;
    return len%2==0?s.slice(len/2-1,len/2+1):s.slice(Math.floor(len/2),(len+1)/2);
}