// function solution(X, Y) {
//     Y=Y.split("");
//     let answer = X.split("").filter(el=>{
//         if(Y.includes(el)){
//             Y.splice(Y.indexOf(el),1);
//             return true;
//         }
//         return false;
//     }).sort((a,b)=>b-a).join("");
//     if(answer.length==0)return '-1';
//     return BigInt(answer)+'';
// }

function solution(X, Y) {
    const countX = new Array(10).fill(0);
    const countY = new Array(10).fill(0);
    let result = [];
    for(let num of X){
        countX[num]++;
    }
    for(let num of Y){
        countY[num]++;
    }
    for(let i=9; i>=0;i--){
        let count = Math.min(countX[i],countY[i]);
        if(count>0){
            result.push((i+'').repeat(count));
        }
    }
    if(result.length==0)return '-1'
    if(result[0]==0)return '0'
    return result.join("")
}