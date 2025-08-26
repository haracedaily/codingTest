function solution(lottos, win_nums) { 
    var answer = []; 
    let cnt = 0; 
    lottos = lottos.filter(el=>el!=0);
    lottos.map(el=>{ if(win_nums.findIndex(ele=>ele==el)>=0)cnt++; })
    if(cnt>=2){
        let reward = 7-cnt;
        answer.push(reward-(6-lottos.length));
        answer.push(reward);
    }else{
        let reward = 7-cnt-(6-lottos.length)>6?6:7-cnt-(6-lottos.length);
            answer.push(reward);
            answer.push(6);
        }
    return answer; 
}