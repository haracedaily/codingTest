function solution(array, height) {
    let ary = array.filter((ele)=>{return ele>height})
    var answer = ary.length;
    return answer;
}