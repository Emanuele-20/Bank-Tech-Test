const Bank = require("../src/bank");

beforeEach(() => {
	bank = new Bank();
});

describe("Bank Tech Test", () => {
	it("Implements the possibility to make a deposit", () => {
		bank.deposit(1000, "10/01/2023");
		expect(bank.balance).toBe(1000);
	});
	it("Implements the possibility to make a deposit and update the balance", () => {
		bank.deposit(1000, "10/01/2023");
		bank.deposit(2000, "10/01/2023");
		expect(bank.balance).toBe(3000);
	});
	it("Implements the possibility to make a withdrawal", () => {
		bank.deposit(1000, "10/01/2023");
		bank.deposit(2000, "10/01/2023");
		bank.withdrawal(500, "10/01/2023");
		expect(bank.balance).toBe(2500);
	});
	it("Implements the possibility to not withdrawal more money than the amount present in your account", () => {
		bank.deposit(1000, "10/01/2023");
		bank.deposit(2000, "10/01/2023");
		expect(() => {
			bank.withdrawal(3500);
		}).toThrow("You have not enough funds");
	});
	it("Implement the functionality to get a statement", () => {
		bank.deposit(1000, "10/01/2023");
		// console.log(`${bank.headStatement}\n${bank.transactionTracker}`);
		// console.log(bank.transactionTracker.join());
		expect(bank.getStatement()).toBe(
			`date || credit || debit || balance\n10/01/2023 || 1000 || || 1000`
		);
	});
});

describe("Feature, using the bank account", () => {
	it("Return the statement in the correct format, after 2 transtactions", () => {
		bank.deposit(1000, "10/01/2023");
		bank.deposit(2000, "13/01/2023");
		expect(bank.balance).toBe(3000);
		expect(bank.getStatement()).toBe(
			`${`date || credit || debit || balance`}\n${"13/01/2023 || 2000 || || 3000"}\n${"10/01/2023 || 1000 || || 1000"}`
		);
	});
	it("Return the statement in the correct format, after 3 different transtactions", () => {
		bank.deposit(1000, "10/01/2023");
		bank.deposit(2000, "13/01/2023");
		bank.withdrawal(500, "14/01/2023");
		expect(bank.balance).toBe(2500);
		expect(bank.getStatement()).toBe(
			`${`date || credit || debit || balance`}\n${"14/01/2023 || || 500 || 2500"}\n${"13/01/2023 || 2000 || || 3000"}\n${"10/01/2023 || 1000 || || 1000"}`
		);
	});
});
