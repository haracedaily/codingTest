function solution(arr1, arr2) {
    return arr1.map((el,idx)=>el.map((ele,ind)=>ele+arr2[idx][ind]));
}