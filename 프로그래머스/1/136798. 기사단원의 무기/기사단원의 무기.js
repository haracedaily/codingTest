function solution(number, limit, power) {
    let answer = 0;

    for (let i = 1; i <= number; i++) {
        let inner = 0;
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                inner++; 
                if (j * j !== i) inner++;
            }
        }
        answer += (inner > limit ? power : inner);
    }

    return answer;
}