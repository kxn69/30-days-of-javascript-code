// Exercises: Level 3

// 1. Create an object called personAccount. It has firstName, lastName, incomes, 
//expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, 
//addExpense and accountBalance methods. Incomes is a set of incomes and its description 
//and expenses is also a set of expenses and its description.

class PersonAccount {
    constructor (firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = new Map()
        this.expenses = new Map()
    }

    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    totalIncome() {
        let total = 0
        for (const income of this.incomes.values()) {
            total += income
        }
        return total
    }

    totalExpenses() {
        let total = 0
        for (const expense of this.expenses.values()) {
            total += expense
        }
        return total;
    }
    accountInfo() {
        let info = `Account information for ${this.getFullName()}:\n`
        info += `Your total income: ${this.totalIncome()}\n`
        info += `Your total expenses: ${this.totalExpenses()}\n`
        info += `Your account balance: ${this.accountBalance()}`
        return info;
    }

    addIncome(description, amount) {
        this.incomes.set(description, amount)
    }

    addExpense(description, amount) {
        this.expenses.set(description, amount)
    }
    
    accountBalance() {
        return this.totalIncome() - this.totalExpenses();
    }
} 

const habibi = new PersonAccount("Habibi", "Habibiz");
habibi.addIncome('Salary', 5000);
habibi.addIncome('Bonus', 1000);
habibi.addExpense('Rent', 2000);
habibi.addExpense("Groceries", 500);

console.log(habibi.accountInfo())
console.log(habibi.accountBalance())