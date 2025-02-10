function solution(babbling) {
    var answer = 0;
   babbling.some(x=>{
    x=x.replace("aya",'1');
    x=x.replace("ye",'1');
    x=x.replace("woo",'1');
    x=x.replace("ma",'1');
    x=x.replaceAll("1",'');
    if(x.length==0){
        answer++;
    }
})
    return answer;
}