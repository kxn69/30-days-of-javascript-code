// Exercises: Level 3

// 1. Create a personAccount out function. It has firstName, lastName, incomes, expenses inner variables. 
// It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. 
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = () => {
    let firstName = 'Habibi';
    let lastName = 'Habibiz';
    let incomes = new Set()
    let expenses = new Set()

    getFullName = () => {
        return `${firstName} ${lastName}`
    }

    addIncome = (description, amount) => {
         incomes.add({ description, amount })
    }

    addExpense = (description, amount) => {
         expenses.add({ description, amount })
    }

    totalIncome = () => {
        total = 0
        for (const income of incomes) {
            total += income.amount
        }
        return total
    }

    totalExpenses = () => {
        total = 0
        for (const expense of expenses) {
            total += expense.amount
        }
        return total
    }

    accountBalance = () => {
        return totalIncome() - totalExpenses();
    }

    accountInfo = () => {
        let info = `Account information for ${getFullName()}:\n`
        info += `Your total income: ${totalIncome()}\n`
        info += `Your total expenses: ${totalExpenses()}\n`
        info += `Your account balance: ${accountBalance()}`
        return info;
    }

    return {
        firstName,
        lastName,
        incomes,
        expenses,
        getFullName,
        addIncome,
        addExpense,
        totalIncome,
        totalExpenses,
        accountBalance,
        accountInfo
    };
}

const myAccount = personAccount()

myAccount.addExpense('Rent', 1000);
myAccount.addExpense('Groceries', 200);
myAccount.addExpense('Utilities', 150);

myAccount.addIncome('Salary', 3000);
myAccount.addIncome('Freelance Work', 500);


console.log('First Name: ', myAccount.firstName)
console.log('Last Name:', myAccount.lastName)

console.log('Incomes:');
for (const income of myAccount.incomes) {
    console.log(`${income.description}: ${income.amount}`);
}

console.log('Expenses:');
for (const expense of myAccount.expenses) {
    console.log(`${expense.description}: ${expense.amount}`);
}

console.log(myAccount.accountInfo())