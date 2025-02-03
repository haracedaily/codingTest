function solution(n, k) {
    let sale = n>=10?parseInt(n/10)*2000:0;
    var answer = (n*12000)+(k*2000)-sale;
    return answer;
}