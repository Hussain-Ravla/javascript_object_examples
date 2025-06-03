const student ={
    name:"Piyush",
    age:23,
    education:"MCA",

    getdetails(){
        return console.log(`Name : ${this.name} , Age : ${this.age} , Education : ${this.education}`);
    }
}

console.log(student.getdetails());
