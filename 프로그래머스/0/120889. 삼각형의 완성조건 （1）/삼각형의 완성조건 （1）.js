function solution(sides) {
    let answer = Math.max(...sides);
    let idx = sides.indexOf(answer);
    sides.splice(idx,1);
    let sum = 0;
    sides.forEach(el=>sum += el);
    return sum>answer?1:2;
}