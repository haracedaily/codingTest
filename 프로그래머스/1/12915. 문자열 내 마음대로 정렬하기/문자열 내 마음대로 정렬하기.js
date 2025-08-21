function solution(strings, n) {
    return strings.sort((a,b)=>{
        if(a[n]!=b[n]){
        return a[n].charCodeAt()-b[n].charCodeAt()
        }else{
          return a.localeCompare(b)
          }
    });
}