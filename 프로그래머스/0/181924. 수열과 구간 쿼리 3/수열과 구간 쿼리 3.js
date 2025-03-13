function solution(arr, queries) {
    queries.map(el=>{
        arr[el[1]]=arr.splice(el[0],1,arr[el[1]])[0];
    })
    return arr;
}