function solution(n, works) {
    let total = works.reduce((a, b) => a + b, 0);
    if (total <= n) return 0;
    works.sort((a, b) => b - a);
    while(n){
        if(works[0]>0){
        works[0]-=1;
        n-=1;
        }
        for(let i=1;i<works.length;i++){
            if(works[i]>=works[0]){
                if(!n){
                    break;
                }
                if(works[i]>0){
                works[i]-=1;
                n-=1;
                }
            }
        }
    }
//     for (let i = 0; i < n; i++) {
//         // works[0]-=1;
//          let res = works[0]-works[1];
//         if(works[0]==0)break;
//          if(res<=n&&res>1){
//              works[0]-=res;
//              i+=res-1;
             
//         }//else if(res>n){
//            // works[0]-=n
        
             
//          else{
//              works[0]-=1
//         //n-=1
//              }
//         if(works[0]<=works[1]){
//             let idx=works.findIndex(el=>el>works[0]);
//             //let j=[...works].slice(0,idx+1).sort((a,b)=>b-a);
//             if(idx>0){
//             let j = works.splice(0,idx);
//                 works.splice(1,0,...j);
//             //works.splice(0,idx+1,...j);
//             }
//         }
//     }
    return works.reduce((sum, work) => sum + work **2, 0);
}
