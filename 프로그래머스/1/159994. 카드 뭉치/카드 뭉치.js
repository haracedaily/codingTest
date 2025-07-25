function solution(cards1, cards2, goal) {
    var answer = false;
    goal.map(el=>{
        if(cards1[0]===el)cards1.shift();
        else if(cards2[0]===el)cards2.shift();
        else answer = "No";
    })
    return answer?"No":"Yes";
}