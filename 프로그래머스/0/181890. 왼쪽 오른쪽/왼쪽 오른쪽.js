function solution(str_list) {
    let answer = [];
    let left_index = str_list.indexOf('l');
    let right_index = str_list.indexOf('r');
    if(left_index<0&&right_index<0){
        return answer;
    }else if(left_index>=0&&right_index>=0){
        return left_index<right_index?str_list.slice(0,left_index):str_list.slice(right_index+1);
    }else if(left_index>=0){
        return str_list.slice(0,left_index);
    }else{
        return str_list.slice(right_index+1);
    }
}