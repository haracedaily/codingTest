function solution(n, numlist) {
    var answer = [];
    return numlist.filter(el=>el%n==0);
}