function solution(nums) {
    var answer = 0;
    nums.sort((a,b)=>b-a);
    let sumList = [];
     let decimals=new Array(nums[0]+nums[1]+nums[2]+1).fill(1);
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                sumList.push(nums[i]+nums[j]+nums[k]);
            }
        }
    }
    
    for(let i = 2;i<=Math.sqrt(nums[0]+nums[1]+nums[2]);i++){
        if(decimals[i]){
            for(let j=i**2;j<=nums[0]+nums[1]+nums[2];j+=i){
                if(decimals[j])decimals[j]=0;
            }
        }
    }
    sumList.forEach(item=>{
        if(decimals[item])answer++;
    })
    return answer;
}