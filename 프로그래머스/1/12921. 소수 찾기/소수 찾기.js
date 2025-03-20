function solution(n) {
    let count = 0;
    const num = [];
    for (let i = 2; i <= n; i++) {
        if (i == 2) { num.push(i); count++; continue; };
        if (i == 3) { num.push(i); count++; continue; };
        let b = true;
        const sqri = Math.sqrt(i);

        for (let j = 0; j < num.length; j++) {
            if (num[j]> sqri) break;
            if (i % num[j] == 0) {
                b = false;
                break;
            }
        }
        if (b) {
            num.push(i);
            count++;
        }
    }
    return count;
}
