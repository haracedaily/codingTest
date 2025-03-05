function solution(arr) {
    return arr.map(el=>((el+" ").repeat(el)).split(" ")).flat().filter(el=>!!el).map(el=>Number(el));
}