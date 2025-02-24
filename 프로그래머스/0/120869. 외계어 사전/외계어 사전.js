function solution(spell, dic) {
    return dic.filter(el=>{
        for(let [idx,ele] of spell.entries()){
            if(new RegExp(`${ele}{1}`, 'g').test(el)){
                if(idx!=spell.length-1){
                continue;
                }else{
                    el=true;
                }
            }else{
                el=false;
                break;
            }
        }
        return el;
    }).length>0?1:2;
}