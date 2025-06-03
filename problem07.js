const age = 18
let isage = false
if(age>=18){
    isage = true
}else{
    isage = false
}

switch(isage){
    default:
        console.log("Invalid age");
    case true:
        console.log("You are 18+");
        break
    case false:
        console.log("You are under 18");
        
}