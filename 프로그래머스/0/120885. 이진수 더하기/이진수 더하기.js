function solution(bin1, bin2) {
    return (change_binary(bin1.split("").reverse())+change_binary(bin2.split("").reverse())).toString(2);
}

function change_binary(a){
    let res =0;
    for(let i = 0; i<a.length; i++){
        if(a[i]==1)res+=2**i;
    }
    console.log(res);
    return res;
}