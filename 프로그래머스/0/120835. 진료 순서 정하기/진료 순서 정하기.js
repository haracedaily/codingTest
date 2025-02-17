function solution(emergency) {
    return emergency.map((el,i)=>{
        return [...emergency].sort((a,b)=>b-a).map((ele,idx)=>{if(ele==el)return idx+1}).filter(el=>!!el)[0];
    })
}