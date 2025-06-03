const obj = {
    name:"piyush",
    age:21
}
Object.freeze(obj)
obj.name = "Mohit"
console.log(obj)