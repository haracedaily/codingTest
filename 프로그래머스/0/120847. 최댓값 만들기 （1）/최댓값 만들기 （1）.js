function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    let first=Math.max(...numbers);
    let second_numbers=numbers.filter((el)=>{return el!=first});
    let second=Math.max(...second_numbers);
    numbers.sort((a,b)=>b-a)
    return numbers[0]*numbers[1];
}