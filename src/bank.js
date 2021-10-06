class Bank {
	constructor() {
		this.balance = 0;
		this.headStatement = "date || credit || debit || balance";
		this.transactionTracker = [];
	}
	deposit(amount, date) {
		this.balance = this.balance + amount;
		this.transactionTracker.push(`${date} || ${amount} || || ${this.balance}`);
	}
	withdrawal(amount) {
		if (this.balance - amount < 0) {
			throw new Error("You have not enough funds");
		} else {
			this.balance = this.balance - amount;
		}
	}
	getStatement() {
		return `${this.headStatement}\n${this.transactionTracker}`;
	}
}
module.exports = Bank;
