function solution(my_string) {
    return my_string.split("").map((el)=>{
        return /[a-z]/.test(el)?el.toUpperCase():el.toLowerCase();
    }).join("");
}