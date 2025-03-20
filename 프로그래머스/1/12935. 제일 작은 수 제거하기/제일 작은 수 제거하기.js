function solution(arr) {
    let a = [...arr].sort((a,b)=>a-b)[0]
    return new Set(arr).size>1?arr.filter(el=>el!=a):[-1];
}