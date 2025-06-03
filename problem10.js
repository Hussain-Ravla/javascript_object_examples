const arr = [1,2,3,4,5,6,7]
const resultarr = arr.filter((x)=>x%2!==0).reduce((x,current)=>x+current,0)

console.log(resultarr);
