let days={1:"MON",2:"TUE",3:"WED",4:"THU",5:"FRI",6:"SAT",0:"SUN"};
function solution(a, b) {
    let search = '2016-'+a+"-"+b;
    
    return days[new Date(search).getDay()];
}
