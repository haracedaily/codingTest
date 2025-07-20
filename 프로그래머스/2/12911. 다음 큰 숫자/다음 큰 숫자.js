function solution(n) {
    let origin = n.toString(2).split("").filter(el=>el==1).length;
    let cnt;
    while(cnt!==origin){
        n++;
        cnt = n.toString(2).split("").filter(el=>el==1).length;
    }
    
    return n
}