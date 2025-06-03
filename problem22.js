const user = {
    1:1,
    2:2,
    3:3
}
console.log(Object.values(user).reduce((x,i)=>x+i,0));

