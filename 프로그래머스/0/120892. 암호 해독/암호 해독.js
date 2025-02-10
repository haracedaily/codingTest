function solution(cipher, code) {
    let answer = "";
    let idx = -1;
    a:while(idx<cipher.length-1){
        idx++;
        if(code==cipher.length){
            answer=cipher[code-1];
            break a;
        };
        if((idx-(code-1))%code===0){
            answer+=cipher[idx];
        };
    }
    return answer;
}