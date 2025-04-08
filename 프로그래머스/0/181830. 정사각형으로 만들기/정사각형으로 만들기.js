function solution(arr) {
    
    let max = Math.max(arr.length,arr[0].length);
    let answer = Array(max).fill(Array(max).fill(0));
    
    return answer.map((el,idx,ary)=>{
        let ele = [...el];
arr[idx]?ele.unshift(...arr[idx]):el;
        return ele.splice(0,max);
}
);
}