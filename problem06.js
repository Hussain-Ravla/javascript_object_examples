const usertype = "admin"

switch(usertype){
    case "admin":
        const usertask = "create"
        switch(usertask){
            case "create":
                console.log("Creating....");
                break
            case "edit":
                console.log("Editing....");
                break
            case "delete":
                console.log("Deleting");
                break
    case "user":
        console.log("Welcome User");
        break
    default:
        console.log("Invalid Input");
        }
            
}