function solution(l, r) {
    var answer = new Array(r).fill(0);
    for(let i = Math.ceil(l/5); i<=parseInt(r/5);i++){
        if(i%10==0||i%10==1){
            if(!(i+"").match(/[^0-1]/g)?.length>0){
            answer[i]=1;    
            }
            
        }
    }
    let res = answer.map((el,idx)=>el==1?idx*5:0);
    
    res = res.filter(el=>!!el);
    
    return res.length?res:[-1];
}