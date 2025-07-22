function solution(rank, attendance) {
    let posiRank = [];
    
    attendance.map((el,idx)=>{
        if(el)posiRank.push([rank[idx],idx]);
                             });
    posiRank.sort((a,b)=>a[0]-b[0]);
    
    return posiRank[0][1]*10000+posiRank[1][1]*100+posiRank[2][1];
}