class BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.balance = balance;
    this.#accountHolderName = accountHolderName;
  }
  deposit(amount) {
    this.balance += amount;
  }
  #accountNumber;
  #accountHolderName;
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }
  withdraw(amount) {
    this.balance -= amount;
  }
  getBalance() {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }
  withdraw(amount) {
    if (this.balance - amount < 0) {
      console.log("Insufficient balance. Withdrawal failed.");
    } else {
      this.balance -= amount;
    }
  }
  getBalance() {
    return this.balance;
  }
}

const checking = new CheckingAccount("1234", 1000, "John Doe");
const savings = new SavingsAccount("5678", 500, "Jane Smith");
checking.deposit(500);
checking.withdraw(200);
console.log(checking.getBalance());
savings.withdraw(600);
console.log(savings.getBalance());
