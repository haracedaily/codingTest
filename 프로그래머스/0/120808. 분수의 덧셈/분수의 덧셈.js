function solution(numer1, denom1, numer2, denom2) {
    var answer = [];

let gcd1 = denom2;
let gcd2 = denom1;
  let r
  while (gcd2 != 0) {
    r = gcd1 % gcd2
    gcd1 = gcd2
    gcd2 = r
}
    let lcm = denom1*denom2/gcd1;

    denom1 = lcm/denom1;
    denom2 = lcm/denom2;
    answer.push((numer1*denom1)+(numer2*denom2));
    answer.push(lcm);
//     if(denom1==1&&denom2==1&&Number.isInteger(answer[0]/answer[1])){
//         answer[0]/=answer[1];
//         answer[1]=1;
//     }else if(denom1==1&&denom2==1&&Number.isInteger(answer[1]/answer[0])){
//         answer[1]/=answer[0];
//         answer[0]=1;
        
//     }
    let re = reChk(answer[0],answer[1]);
    answer[0]/=re;
    answer[1]/=re;
    function reChk(a,b){
        if(a%b==0)return b;
        return reChk(b,a%b);
    }

    return answer;
}