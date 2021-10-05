const Bank = require("../src/bank");

beforeEach(() => {
	bank = new Bank();
});

describe("Bank Tech Test", () => {
	it("Implements the possibility to make a deposit", () => {
		bank.deposit(1000);
		expect(bank.balance).toBe(1000);
	});
	it("Implements the possibility to make a deposit and update the balance", () => {
		bank.deposit(1000);
		bank.deposit(2000);
		expect(bank.balance).toBe(3000);
	});
	it("Implements the possibility to make a withdrawal", () => {
		bank.deposit(1000);
		bank.deposit(2000);
		bank.withdrawal(500);
		expect(bank.balance).toBe(2500);
	});
});
