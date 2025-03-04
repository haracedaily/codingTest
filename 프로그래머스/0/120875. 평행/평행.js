function solution(dots) {
    const gradients = [];
    const order = [1,2,3,0,2,3];
    for(let i=0; i<6; i++) {
        let gradient = (dots[i%4][1]-dots[order[i]][1])/(dots[i%4][0]-dots[order[i]][0]);
        gradients.push(gradient);
    }
    return gradients[0] == gradients[2] || gradients[1] == gradients[3] || gradients[4] == gradients[5]? 1 : 0; 
}

