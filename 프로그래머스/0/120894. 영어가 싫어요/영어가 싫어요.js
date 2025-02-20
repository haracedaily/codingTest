class num {
    constructor(value) {
        this.zero="0",
            this.one ="1",
            this.two = "2",
            this.three = "3",
            this.four = "4",
            this.five = "5",
            this.six = "6",
            this.seven = "7",
            this.eight = "8",
            this.nine = "9";
    }
}
function solution(numbers) {
    let num_list = new num();
    var answer = 0;
    let text = "";
    return Number(numbers.split("").map(el=>{
        text +=el;
        if(!!num_list[text]){
            el=num_list[text]
            text="";
            return el;
        }
    }).join(""));
}