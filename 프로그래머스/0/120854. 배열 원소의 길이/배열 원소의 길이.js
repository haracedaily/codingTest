function solution(strlist) {
    var answer = [];
    [...strlist].forEach((el,i)=>{el=el.length 
        answer[i]=el;
    });
    return answer;
}