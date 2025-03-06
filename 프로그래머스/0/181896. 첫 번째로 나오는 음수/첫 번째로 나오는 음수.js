function solution(num_list) {
    // return num_list.filter(el=>el<0).length>0?(num_list.map((el,idx)=>el<0?idx:null).filter(el=>el!=null)[0]):-1;
    return num_list.indexOf(num_list.find(el=>el<0));
}