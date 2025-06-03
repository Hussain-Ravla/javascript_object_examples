    const num = 10
    let state = ""
    if(num%2==0){
        state = "even"
    }else{
        state = "Odd"
    }
    
    switch(state){

        case "even":
            console.log("Number is Even");
            break
            
        case '-':
            console.log("Number is Odd");
            break
        
        default:
            console.log("Not Even Nor odd");
    }
