function solution(arr) {
    return filterMap(arr);
}
    function filterMap(arr){
        let res = [...arr].map((el,idx,ary)=>{
            if(idx>0){
             if(arr[idx-1]==arr[idx]){
                 arr[idx-1]=null;
                 arr[idx]=null;
             }
        }
                   return el;
});
        let result= arr.filter(el=>el!=null);
    return result.length!=res.length?filterMap(result):(result.length>0?result:[-1]);
    }