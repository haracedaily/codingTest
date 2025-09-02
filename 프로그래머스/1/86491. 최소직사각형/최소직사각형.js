function solution(sizes) {
    var answer = 0;
    sizes = sizes.map(el=>el.sort((a,b)=>b-a));
    let sizeA = sizes.sort((a,b)=>b[0]-a[0])[0][0];
    let sizeB = sizes.sort((a,b)=>b[1]-a[1])[0][1];
    return sizeA*sizeB;
}