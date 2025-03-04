function solution(score) {
    let ary=score.map((el,idx)=>(el[0]+el[1])/2).sort((a,b)=>b-a);
    return score.map((el)=>ary.indexOf((el[0]+el[1])/2)+1);
}
