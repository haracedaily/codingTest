function solution(answers) {
    var answer = [];
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let firstScore = answers.filter((el,idx)=>el===first[idx%first.length]).length;
    let secondScore = answers.filter((el,idx)=>el===second[idx%second.length]).length;
    let thirdScore = answers.filter((el,idx)=>el===third[idx%third.length]).length;
    const maxScore = Math.max(firstScore,secondScore,thirdScore);
    
    if(maxScore===firstScore)answer.push(1);
    if(maxScore===secondScore)answer.push(2);
    if(maxScore===thirdScore)answer.push(3);
    
    return answer;
}