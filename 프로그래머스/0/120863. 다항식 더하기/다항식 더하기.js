function solution(polynomial) {
    var answer = '';
    let count=0;
    let num=0;
    polynomial.split(" ").map((el,idx,arr)=>{
        if(el.includes('x')){
            /[0-9]/.test(el)?count+=Number(el.split("").filter(el2=>/[0-9]/.test(el2)).join("")):count++;
        }else if(!isNaN(el)){
            num+=Number(el);
        }
    })
   
    count>1?(num>0?answer=`${count}x + ${num}`:answer=`${count}x`):(num>0?answer=`${num}`:0);
    if(count==1&&num>0){
        answer=`x + ${num}`;
    }else if(count==1&&num<=0){
        answer=`x`;
    }
    return answer;
}