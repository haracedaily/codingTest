function solution(arr1, arr2) {
    var answer = [[]];
    arr1.map((el,idx)=>{
        answer.push(el.reduce((a,b,ind)=>{a.push(b+arr2[idx][ind])
                                         return a;},[]));
    })
    return answer.filter(el=>el.length>0);
}