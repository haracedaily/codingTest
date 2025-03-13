function solution(t, p) {
    return [...t].reduce((a,b,i)=>{
        let c = t.slice(i,i+p.length);
        return c<=p&&c.length==p.length?a+=1:a},0);
}