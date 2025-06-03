const arr = ["Orange","Apple","Grapes","121"]
const resultarr = arr.filter((x)=>x == x.split('').reverse().join(''))

console.log(resultarr);
