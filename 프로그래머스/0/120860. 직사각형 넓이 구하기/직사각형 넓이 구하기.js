function solution(dots) {
    return Math.abs(dots.filter((el,idx,arr)=>el[0]==arr[0][0]||el[1]==arr[0][1]).map((el,idx,arr)=>{
        if(idx!=0){
            if(el[0]==arr[0][0]){
                return el[1]-arr[0][1];
            }else if(el[1]==arr[0][1]){
                return el[0]-arr[0][0]
            }
        }
    }).filter(el=>!!el).reduce((a,b)=>a*b));
}

//평행하다면 => 동일값이 존재한다
//?? dots의 원소는 -255 ~ 255
//dots의 원소길이 2
//dots의 길이 4
//???뭐가 문제지