function solution(array, n) {
    var answer = 0;
    return array.includes(n)?array.length-array.filter((el)=>{return el != n}).length:0;
}