function solution(triangle) {
    for(let i=triangle.length-2;i>=0;i--){
        for(let j=triangle[i].length-1;j>=0;j--){
            triangle[i][j]+=Math.max(triangle[i+1][j],triangle[i+1][j+1]);
        }
    }
    return triangle[0][0];
}
