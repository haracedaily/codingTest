function solution(arr, query) {
    query.map((el,idx)=>{
            if(idx%2==0)
                arr.splice(el+1)
            else
                arr.splice(0,el)
        })
    return arr;
}