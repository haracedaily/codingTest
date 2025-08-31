function solution(s, skip, index) {
    let answer = '';
    const range = 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .filter(ch => !skip.includes(ch));

    s.split('').forEach(el => {
        let pos = range.indexOf(el);
        let newPos = (pos+index)%range.length;
        answer += range[newPos];
    });

    return answer;
}