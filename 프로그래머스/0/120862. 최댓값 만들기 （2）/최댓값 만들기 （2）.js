function solution(numbers) {
    var answer = 0;
    let max = Math.max(...numbers);
    numbers.splice(numbers.indexOf(max),1);
    let second = Math.max(...numbers);
    let mMax = Number(Math.min(...numbers));
    numbers.splice(numbers.indexOf(mMax),1);
    let mSecond = Math.min(...numbers);
    return max*second>=(mMax*mSecond!=Infinity?mMax*mSecond:0)?max*second:mMax*mSecond;
}