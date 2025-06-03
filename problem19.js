const bankaccount = {

    balance:0,

    deposit(amount){
        this.balance+=amount
    },

    withdraw(amount){
        this.balance-=amount
    },

    currentbalance(){
        console.log(this.balance)
    }
}


bankaccount.deposit(1000)
bankaccount.withdraw(500)
bankaccount.currentbalance()