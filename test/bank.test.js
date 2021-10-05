const Bank = require("../src/bank");

describe("Bank Tech Test", () => {
	it("Implements the possibility to make a deposit", () => {
		let bank = new Bank();
		bank.deposit(1000);
		expect(bank.balance[0]).toBe(1000);
	});
});
