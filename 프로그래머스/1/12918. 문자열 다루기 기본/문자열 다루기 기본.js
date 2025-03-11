function solution(s) {
    var answer = true;
    return (s.length==4||s.length==6)&&!/[a-z,A-Z]/g.test(s);
}