function solution(my_string) {
    var answer = [];
    return my_string.split("").filter((el)=>{return /[0-9]/.test(el)}).map((el)=>{return Number(el);}).sort((a,b)=>{return a-b});
}