function solution(s) {
    var answer = "";
    let data = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    [...s].reduce((a,b)=>{
        
        if(Number(b)>=0){
            answer+=b;
            return ""
        }
        if(data.findIndex(el=>el==a+b)>=0){
        answer+=String(data.findIndex(el=>el==a+b));
        return ""
        }
            return a+b
        
    },"")
    return Number(answer);
}