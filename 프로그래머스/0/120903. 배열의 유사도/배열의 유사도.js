function solution(s1, s2) {
    let s3 = [...s1,...s2];
    return s1.length+s2.length-s3.filter((el,idx)=>{return s3.indexOf(el)===idx}).length;
}