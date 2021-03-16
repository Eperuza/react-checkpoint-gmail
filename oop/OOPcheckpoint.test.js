
//##### tests

describe('Bank Account', function() {

    it("deposit() should deposit the given amount of money into the account ", () => {
        var bankAccount = new BankAccount()
        bankAccount.deposit(100)
        bankAccount.deposit(10)
        expect(bankAccount.balance).to.equal(110)
    })


    it("withdraw() should withdraw the given amount of money from the account ", () => {
        var bankAccount = new BankAccount()
        bankAccount.deposit(500)
        bankAccount.withdraw(100)
        expect(bankAccount.balance).to.equal(400)
    })


    it("checkBalance() should return the current balance of the account", function() {
        var bankAccount = new BankAccount(); 
        bankAccount.deposit(100)
        bankAccount.deposit(40)
        bankAccount.withdraw(20)
        expect(bankAccount.balance).to.equal(120)
        expect(bankAccount.checkBalance()).to.equal(`Your account balance is $120`)
    })
    

    it("getTransactions() should return a list of deposits and withdrawals from the account", () => {
        var bankAccount = new BankAccount(); 
        bankAccount.deposit(100)
        bankAccount.deposit(250)
        bankAccount.withdraw(100)
        bankAccount.withdraw(50)
        expect(bankAccount.balance).to.equal(200)
        expect(bankAccount.getTransactions().deposits[1]).to.equal(250)
        expect(bankAccount.getTransactions().withdrawals[0]).to.equal(100)
    })
})

describe('Checking Account ', function() {

    it("should be an instance of a subclass of BankAccount",()=>{
        expect(CheckingAccount.prototype instanceof BankAccount).to.equal(true)
    })

    it("should not allow users to overdraft", () => {
        var checkingAccount = new CheckingAccount(); 
        checkingAccount.deposit(100)
        expect(checkingAccount.withdraw(105)).to.equal("Withdrawal denied: insufficient funds")
    })  
    it("it should assess a $40 fee if a withdrawal will bring the balance under $50", () => {
        var checkingAccount = new CheckingAccount(); 
        checkingAccount.deposit(100)
        checkingAccount.withdraw(60)
        expect(checkingAccount.balance).to.equal(0)
    })

})


describe('Savings Account', function() {
     it("should be an instance of a subclass of BankAccount",()=>{
        expect(SavingsAccount.prototype instanceof BankAccount).to.equal(true)
    })

    it ("should return 'Transfer denied: no linked checking account' if a checking account hasn't been linked when transfer() is called", ()=>{
        var savingsAccount = new SavingsAccount(); 
        savingsAccount.deposit(1000);
        expect(SavingsAccount.transfer(400)).to.equal('Transfer denied: no linked checking account')
    })

    it("should allow a user to transfer money from savings account into checking account", () => {
        var checkingAccount = new CheckingAccount(); 
        checkingAccount.deposit(500)
        expect(checkingAccount.balance).to.equal(500)
        var savingsAccount = new SavingsAccount(); 
        expect(savingsAccount.balance).to.equal(0)
        savingsAccount.deposit(1000)
        savingsAccount.linkToChecking(checkingAccount);
        savingsAccount.transfer(300);
        expect(savingsAccount.balance).to.equal(700);
        expect(checkingAccount.balance).to.equal(800);
    })

    it("has a lifetime withdrawal limit of 10", () => {
        var savingsAccount = new SavingsAccount(); 
        expect(savingsAccount.remainingWithdrawals).to.equal(10)
        savingsAccount.deposit(1000)
        savingsAccount.withdraw(10)
        savingsAccount.withdraw(10)
        savingsAccount.withdraw(10)
        savingsAccount.withdraw(10)
        savingsAccount.withdraw(10)
        savingsAccount.withdraw(10)
        savingsAccount.withdraw(10)
        savingsAccount.withdraw(10)
        savingsAccount.withdraw(10)
        expect(savingsAccount.remainingWithdrawals).to.equal(1)
        savingsAccount.withdraw(10)
        expect(savingsAccount.remainingWithdrawals).to.equal(0)
    })

    it("withdraws $50 from the savings account if the lifetime withdrawal limit of 10 is exceeded", () => {
        var savingsAccount = new SavingsAccount(); 
        expect(savingsAccount.remainingWithdrawals).to.equal(10)
        savingsAccount.deposit(1000)
        savingsAccount.withdraw(10)
        savingsAccount.withdraw(10)
        savingsAccount.withdraw(10)
        savingsAccount.withdraw(10)
        savingsAccount.withdraw(10)
        savingsAccount.withdraw(10)
        savingsAccount.withdraw(10)
        savingsAccount.withdraw(10)
        savingsAccount.withdraw(10)
        savingsAccount.withdraw(10)
        expect(savingsAccount.remainingWithdrawals).to.equal(0)
        expect(savingsAccount.balance).to.equal(900)
        savingsAccount.withdraw(10)
        expect(savingsAccount.balance).to.equal(840)
    })
})

