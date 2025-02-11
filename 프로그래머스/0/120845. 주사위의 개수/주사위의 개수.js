function solution(box, n) {
    var answer = 1;
    box.map(el=>parseInt(el/n)).forEach(el=>answer*=el);
    return answer;
}