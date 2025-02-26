function solution(lines) {
    var answer = 0;
    let repeat = 0;
    let reduceAry1=lines.map((el,idx,ary)=>reduceAry(el,idx,ary)).filter(el=>el.length>0).flat();
    if(reduceAry1.length>1){
        let array = reduceAry1.map((el,idx,ary)=>resumAry(el,idx,ary));
        console.log(array)
       return [...new Set(array.flat())].length%2!=0?Math.max(...new Set(array.flat()))-Math.min(...new Set(array.flat())):array.reduce((a,b,idx,ary)=>{
           if(idx<ary.length-1){
               idx++;
           }
           if(idx<ary.length){
           if(ary[idx][0]!=b[0]||ary[idx][1]!=b[1]){
           return a+b[1]-b[0];
           }else if(ary[idx][0]==b[0]&&ary[idx][1]==b[1]){
               if(repeat==0){
                   repeat+=1;
                   return a+b[1]-b[0];
               }
           }
           }
        return a;
       },0);
    }else if(reduceAry1.length==1){
        answer = reduceAry1[0][1]-reduceAry1[0][0];
    }
    return answer;
}

function reduceAry(el,idx,ary){
    let mul = [];
     while(idx<ary.length-1){
            idx++;
            if(el[1]>ary[idx][0]&&el[0]<ary[idx][1]){
                mul.push([Math.max(ary[idx][0],el[0]),Math.min(ary[idx][1],el[1])]);
            }
        }
    return mul;
};

function resumAry(el,idx,ary){
        let mul = el;
     while(idx<ary.length-1){
            idx++;
            if(mul[1]>=ary[idx][0]&&mul[0]<=ary[idx][1]){
                mul = [Math.min(el[0],ary[idx][0]),Math.max(el[1],ary[idx][1])];
                
            }
        }
    return mul;
    
};