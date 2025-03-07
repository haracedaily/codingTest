function solution(binomial) {
    return Function(`return ${binomial}`)();
}