class Bank {
	constructor() {
		this.balance = [];
	}
	deposit(amount) {
		this.balance.push(amount);
	}
}
module.exports = Bank;
