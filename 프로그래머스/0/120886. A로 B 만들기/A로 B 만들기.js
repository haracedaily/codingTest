function solution(before, after) {
    var answer = 1;
    for(let i = 0; i<before.length;i++){
        before.split(before[i]).length!=after.split(before[i]).length?answer=0:0;
    }
    return answer;
}