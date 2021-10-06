class Bank {
	constructor() {
		this.balance = 0;
		this.headStatement = "date || credit || debit || balance";
		this.transactionTracker = [];
	}
	deposit(amount, date) {
		this.balance = this.balance + amount;
		this.transactionTracker.push(
			`${date} || ${amount.toFixed(2)} || || ${this.balance.toFixed(2)}`
		);
	}
	withdrawal(amount, date) {
		if (this.balance - amount < 0) {
			throw new Error("You have not enough funds");
		} else {
			this.balance = this.balance - amount;
			this.transactionTracker.push(
				`${date} || || ${amount.toFixed(2)} || ${this.balance.toFixed(2)}`
			);
		}
	}
	getStatement() {
		return `${this.headStatement}\n${this.transactionTracker
			.reverse()
			.join("\n")}`;
	}
}
module.exports = Bank;
