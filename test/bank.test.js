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
	it("Implements the possibility to not withdrawal more money than the amount present in your account", () => {
		bank.deposit(1000);
		bank.deposit(2000);
		expect(() => {
			bank.withdrawal(3500);
		}).toThrow("You have not enough funds");
	});
	fit("Implement the functionality to get a statement", () => {
		bank.deposit(1000, "10/01/2023");
		console.log(bank.headStatement);
		console.log(bank.transactionTracker);
		expect(bank.getStatement()).toBe(
			`date || credit || debit || balance\n 10/01/2023 || 1000 || || 1000`
		);
	});
});
