function solution(numbers) {
    let answer=0;
    let result = new Array(10).fill(0);
    numbers.map(el=>result[el]++);
    result.map((el,idx)=>{if(el==0)answer+=idx})
    return answer;
}