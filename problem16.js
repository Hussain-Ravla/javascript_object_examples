const arr = [1,2,3,4,5,2,3]
const resultarr = arr.reduce((x,i)=>{
    x[i] = (x[i] || 0) + 1;
    return x
},{})

console.log(resultarr);
