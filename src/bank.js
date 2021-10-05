class Bank {
	constructor() {
		this.balance = 0;
		this.headStatement = "date || credit || debit || balance";
	}
	deposit(amount) {
		this.balance = this.balance + amount;
	}
	withdrawal(amount) {
		this.balance = this.balance - amount;
	}
}
module.exports = Bank;
