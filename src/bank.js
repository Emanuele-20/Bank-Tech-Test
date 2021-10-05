class Bank {
	constructor() {
		this.balance = 0;
		this.headStatement = "date || credit || debit || balance";
	}
	deposit(amount) {
		this.balance = this.balance + amount;
	}
	withdrawal(amount) {
		if (this.balance - amount < 0) {
			throw new Error("You have not enough funds");
		} else {
			this.balance = this.balance - amount;
		}
	}
}
module.exports = Bank;
