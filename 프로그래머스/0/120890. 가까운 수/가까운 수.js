function solution(array, n) {
    let answer = Array.prototype.concat(array.sort((a,b)=>a-b).find(ele=>ele>=n)??201,array.filter(el=>el<n).sort((a,b)=>b-a).find(ele=>ele<n)??201);
    return Math.abs(n-answer[0])<Math.abs(n-answer[1])?answer[0]:answer[1];
}