function solution(n, m, section) {
    let count = 0;
    let paintedUntil = 0;
    for (let s of section) {
        if (s > paintedUntil) {
            count++;
            paintedUntil = s + m - 1; 
        }
    }
    return count;
}