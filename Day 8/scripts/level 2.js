// Exercise: Level 2

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  
// 1. Find the person who has many skills in the users object.

let maxSkills = 0;
let skilledUser = '';

for (const user in users) {
  const numSkills = users[user].skills.length;
  if (numSkills > maxSkills) {
    maxSkills = numSkills;
    skilledUser = user;
  }
}

console.log('User with highest skill is:', skilledUser);

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
let userCount = 0;
for (const user in users) {
    const userPoint = users[user].points;

    if (userPoint >= 50) {
       userCount++
    }
}
console.log(userCount);


// 3. Find people who are MERN stack developer from the users object
let mernDevs = [];
for (mern in users) {
    const lang = users[mern].skills;
    
    if (lang.includes('MongoDB') && lang.includes('Express') && lang.includes('React') && lang.includes('Node')) {
        mernDevs.push(mern);
    }
}
console.log(mernDevs);


// 4. Set your name in the users object without modifying the original users object

const usersCopy = Object.assign({}, users);
usersCopy.kxn = {
    email: 'kxn@kxn.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 200,
    isLoggedIn: false,
    points: 40
} 
console.log(usersCopy);


// 5. Get all keys or properties of users object
const keys = Object.keys(users);
console.log(keys);


// 6. Get all the values of users object

const values = Object.values(users);
console.log(values);


// 7. Use the countries object to print a country name, capital, populations and languages.

console.log(countries[0].name);
console.log(countries[0].capital);
console.log(countries[0].population);
console.log(countries[0].languages);
