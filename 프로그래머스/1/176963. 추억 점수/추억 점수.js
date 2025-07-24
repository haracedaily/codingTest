function solution(name, yearning, photo) {
    let data = {};
    name.map((el,idx)=>
            data[el]=yearning[idx]);
    photo = photo.map(el=>{
        return el.map(ele=>data[ele]?data[ele]:0)
    })
    return photo.map(el=>el.reduce((a,b)=>a+b));
}