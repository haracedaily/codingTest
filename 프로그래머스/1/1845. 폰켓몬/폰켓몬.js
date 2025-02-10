function solution(nums) {
    let ary = [];
    nums.forEach((el)=>{
        if(!ary.includes(el)){
            ary.push(el);
        }
    })
    return Math.min(parseInt(nums.length/2),ary.length);
}