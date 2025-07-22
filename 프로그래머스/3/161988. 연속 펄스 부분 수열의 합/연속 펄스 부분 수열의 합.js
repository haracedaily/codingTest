function solution(sequence) {
  let num1 = sequence[0];
  let num2 = -sequence[0];
  let answer = Math.max(num1, num2);

  for (let i = 1; i < sequence.length; ++i) {
      //짝수 양수변환 홀수 음수변환
    const curNum1 = i % 2 === 0 ? sequence[i] : -sequence[i];
      //홀수 양수변환 짝수 음수변환
    const curNum2 = i % 2 === 1 ? sequence[i] : -sequence[i];
      //짝수 양수 기반 수열의 경우 부분수열 합을 num1에 대입
    num1 = Math.max(curNum1, num1 + curNum1);
      //홀수 양수 기반 수열의 경우 부분수열 합을 num2에 대입
    num2 = Math.max(curNum2, num2 + curNum2);
    //짝수 양수기반의 부분수열합인 num1과 홀수 양수기반의 부분수열합인 num2, 그리고 답안 중 큰값을 결과에 대입
    answer = Math.max(num1, num2, answer);
  }
// let answer1 = sequence.reduce((a,b,idx)=>{

//     const curNum1 = idx % 2 === 0 ? sequence[idx] : -sequence[idx];

//     const curNum2 = idx % 2 === 1 ? sequence[idx] : -sequence[idx];
    
//     num1 = Math.max(curNum1, num1 + curNum1);

//     num2 = Math.max(curNum2, num2 + curNum2);

//     answer = Math.max(num1, num2, answer);
//     return answer;
// })
  return answer;
}
