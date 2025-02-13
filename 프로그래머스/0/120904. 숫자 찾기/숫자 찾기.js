function solution(num, k) {
    return String(num).split("").indexOf(String(k))<0?-1:String(num).split("").indexOf(String(k))+1;
}