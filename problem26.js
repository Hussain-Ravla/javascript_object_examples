const meth = {
    add(num1,num2){
        return num1+num2
    },
    substract(num1,num2){
        return num1-num2
    }
}

const add = meth.add(4,6)
const sub = meth.substract(2,4)

console.log(`${add} : ${sub}`);
