function solution(numbers, k) {
    return (1+((k-1)*2))%numbers.length==0?numbers.length:(1+((k-1)*2))%numbers.length;
}