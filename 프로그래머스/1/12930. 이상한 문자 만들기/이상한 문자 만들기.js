function solution(s) {
    return s.split(" ").map(el=>el.split("").map((ele,idx)=>idx%2==0?ele.toUpperCase():ele.toLowerCase()).join("")).join(" ");
}