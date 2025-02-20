function solution(my_str, n) {
    var answer = [];
    let index = 0;
    my_str.split("").map((el,idx)=>{
        if(index==idx){
            index+=n;
            idx+n>=my_str.length?answer.push(my_str.split("").slice(idx).join("")):answer.push(my_str.split("").slice(idx,idx+n).join(""));
        }
    })
        return answer;
}