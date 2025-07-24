function solution(a, b, c, d) {
    let data = new Array(7).fill(0);
    data[a]++;
    data[b]++;
    data[c]++;
    data[d]++;
    let answer;
    let key = Math.max(...data);
    if(key===4)
        answer=data.findIndex(el=>el==4)*1111;
    else if(key===3)
        answer=(data.findIndex(el=>el==3)*10+data.findIndex(el=>el==1))**2
    else if(key===2)
        if(data.filter(el=>el>0).length>2){
            data.map((el,idx)=>{if(el===1)
            if(answer)answer*=idx;
                                else
                                answer=idx;
                               })
        }
            else{
                data.map((el,idx)=>{
                    if(el===2)
                        if(answer){
                            let a = answer-idx;
                            let b = answer+idx;
                            answer = b*Math.abs(a);
                        }else{
                            answer=idx;
                        }
                })
            }
    else if(key===1){
        answer=Math.min(a,b,c,d);
    }
    return answer;
}