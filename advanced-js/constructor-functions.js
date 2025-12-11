function BankAccount(initialDeposit) {
  this.balance = initialDeposit;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.knowBalance = knowBalance;
}

function deposit(amount) {
  this.balance += amount;
}

function withdraw(amount) {
  if (this.balance >= amount) {
    this.balance -= amount;
  } else {
    console.log("No sufficient fund available");
  }
}

function knowBalance() {
  console.log("Current balance is: ", this.balance);
}

const myAccount = new BankAccount(1000);
myAccount.knowBalance();
myAccount.deposit(200);
myAccount.knowBalance();
myAccount.withdraw(1400);
myAccount.knowBalance();
