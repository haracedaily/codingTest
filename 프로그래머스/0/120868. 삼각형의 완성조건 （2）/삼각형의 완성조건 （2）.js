function solution(sides) {
    sides.sort((a,b)=>b-a);
    console.log(sides);
    var answer = sides[0]-(sides[0]-sides[1]);
    let i = sides[0]+1;
    while(i<sides[0]+sides[1]){
        console.log(i);
        answer++;
        i++;
    }
    return answer;
}