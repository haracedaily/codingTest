function solution(chicken) {
    var answer = 0;
    let coupon = chicken;
    while(coupon>0){
        let pre = Number(String(answer)[String(answer).length-1]);
        let pro = Number(String(coupon)[String(coupon).length-1]);
        if(pre+pro>9){
            answer+=parseInt((pre+pro)/10);
        }
        answer+=coupon;
        coupon=parseInt(coupon/10);
    }
    return parseInt(answer/10);
}


