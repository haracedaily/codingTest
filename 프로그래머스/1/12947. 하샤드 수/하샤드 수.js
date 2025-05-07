function solution(x) {
    let res = String(x).split("").reduce((a,b)=>+a+(+b),0)
    return !(x/res-(~~(x/res))>0);
}