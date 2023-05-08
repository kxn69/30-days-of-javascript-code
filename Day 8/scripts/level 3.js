// Exercise: Level 3

// 1. Create an object literal called personAccount.
// It has firstName, lastName, incomes, expenses properties and it has totalIncome,
// totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName: 'yolo',
    lastName: 'life',
    incomes: 2000,
    expenses: 1400,
    
    addIncome: function(description, amount) {
        this.incomes.push({description, amount});
    },

    addExpenses: function(description, amount) {
        this.expenses.push({description, amount});
    },

    totalIncome: function() {
        let sum = 0;
        for (income in this.incomes) {
            sum += income.amount;
        }
    },

    totalExpenses: function() {
        let sum = 0;
        for (expense in this.expenses) {
            sum += expense.amount;
        }
    },

    accountBalance: function () {
        return this.totalIncome() - this.totalExpenses();
    },

    accountInfo: function() {
        return `Name: ${this.firstName} ${this.lastName}, Income: ${this.totalIncome()}, Expense: ${this.totalExpense()}`;
      }
}
console.log(personAccount);

//

const newUsers = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// 2. Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the collection.
// If user exists, inform the user that he has already an account.

function signUp(newUser) {
    const userExists = newUsers.some(user => user.email === newUser.email);
  
    if (userExists) {
      console.log("User already has an account");
    } else {
      newUsers.push(newUser);
      console.log("User has been added to the collection");
    }
}

const newUser = {
    _id: 'jd92ks',
    username: 'cleff',
    email: 'cleff@example.com',
    password: '123456',
    createdAt: '08/01/2020 11:00 AM',
    isLoggedIn: false
};

// 2b.  Create a function called signIn which allows user to sign in to the application

function signIn(email, password) {
    const user = newUsers.find(user => user.email === email);
  
    if (user) {
      if (user.password === password) {
        user.isLoggedIn = true;
        console.log("User has signed in successfully");
      } else {
        console.log("Incorrect password");
      }
    } else {
      console.log("User not found");
    }
}


// 3. The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product
// 

function rateProduct(productId, userId, rating) {
    const product = products.find(product => product._id === productId);

    if (product) {
        product.ratings.push({userId, rate: rating});
        console.log(`Product ${product.name} has been rated ${rating} by user ${userId}`);
    } else {
        console.log(`Product with ID ${productId} not found`);
    }
}

// 3b. Create a function called averageRating which calculate the average rating of a product
function averageRating(productId) {
    const product = products.find(product => product._id === productId);

    if (product) {
        const totalRating = product.ratings.reduce((acc, curr) => {
            acc + curr.rate
        }, 0);
        const averageRating = totalRating / product.ratings.length;
        return averageRating;
    } else {
        console.log(`Product with ID ${productId} not found`);
    }
}