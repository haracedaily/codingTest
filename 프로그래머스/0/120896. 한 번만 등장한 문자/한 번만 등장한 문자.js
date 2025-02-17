function solution(s) {
    var answer = '';
    s.split("").sort().map(el=>s.split(el).length-1==1?answer+=el:el);
    return answer;
}