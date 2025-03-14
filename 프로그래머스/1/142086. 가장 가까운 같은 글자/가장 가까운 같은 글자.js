function solution(s) {
    return s.split("").map((el,idx)=>s.slice(0,idx).lastIndexOf(el)>=0?idx-s.slice(0,idx).lastIndexOf(el):s.slice(0,idx).lastIndexOf(el));
}