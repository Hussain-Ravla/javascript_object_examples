    const num1 = 10
    const num2 = 2
    
    const operation = "**"
    
    switch(operation){

        case '+':
            console.log(num1+num2);
            break
            
        case '-':
            console.log(num1-num2);
            break
        
        case '*':
            console.log(num1*num2);
            break

        case '/':
            console.log(num1/num2);
            break

        case '**':
            console.log(num1**num2);
            break
        
        default:
            console.log("Invalid choice");
    }
