function solution(quiz) {
    return quiz.map(el=>el.split(" ").map((el,idx,ary)=>{if(idx==0){
        let calc=0;
        while(idx<ary.length-2){
            if(idx%2!=0){ary[idx]
                calc+=ary[idx]=='+'?parseInt(ary[++idx])*1:parseInt(ary[++idx])*-1;
            }else{
                calc+=parseInt(ary[idx])
            }
            idx++;
        }
        return calc==ary[ary.length-1]?"O":"X";
        }
   }).join(""));
}