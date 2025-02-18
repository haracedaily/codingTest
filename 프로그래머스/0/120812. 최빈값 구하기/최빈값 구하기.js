function solution(array) {
    var answer = [...new Set([...array])].map(el=>[...array].filter(el2=>el2==el).length-1);
    let res = Math.max(...answer);
    return answer.indexOf(res)==answer.lastIndexOf(res)?[...new Set(array)][answer.indexOf(res)]:-1;
}