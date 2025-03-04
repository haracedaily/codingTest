function solution(numlist, n) {
    return numlist.map(el=>{return n<el?[el,Math.abs(n-el)]:[el,Math.abs(n-el)+0.5]}).sort((a,b)=>a[1]-b[1]).map(el=>el[0]);
}