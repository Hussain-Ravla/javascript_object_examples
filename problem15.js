const arr = [1,2,3,45,6]
const resultarr = arr.map((n)=>{
    if(n%2==0){
        return "Even"
    }else{
        return "Odd"
    }
})

console.log(resultarr);
