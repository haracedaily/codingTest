function solution(array) {
    var answer = 0;
    
    return array.sort((a,b)=>{return a-b})[parseInt(array.length/2)];
}