function solution(order) {
    var answer = 0;

    return     order.toString().split("").filter(el=>{return /[369]/g.test(el)}).length;
}