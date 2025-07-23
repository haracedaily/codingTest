function solution(s)
{
    let result = [];
       if(s.length%2 !== 0) {return 0;}
    
    for(let i = 0; i < s.length; i++) {
        let curVal = s[i];
            if(result.length>0&&result[result.length-1]===curVal){
                result.pop();
            }else{
                result.push(curVal);
            }
        }
    return result.length === 0 ? 1 : 0;
}