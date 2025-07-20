function solution(routes) {
    routes.sort((a,b)=>a[0]-b[0]);
    let answer = 1;
    let out = routes[0][1];
    routes.forEach((el,idx)=>{
        if(el[0]>out){
            out=el[1];
            answer++;
        }
        if(out>el[1])
            out=el[1];
    })
    return answer;
}