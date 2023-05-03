// Exercise level 1

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , 
// give feedback:'You are old enough to drive' but if not 18 give another 
// feedback stating to wait for the number of years he needs to turn 18.

// let userAge = prompt('Enter your age:');
// if (userAge >= 18) {
//     console.log('You are old enough to drive')
// } else {
//     console.log(`You need to wait ${18 - userAge} years to be able to drive.`)
// } 


// 2. Compare the values of myAge and yourAge using if … else.
// Based on the comparison and log the result to console stating who is older (me or you).
// Use prompt(“Enter your age:”) to get the age as input.

// const myAge = 30
// let yourAge = prompt('Enter your age')
// if (yourAge > myAge) {
//     console.log(`You are ${yourAge-myAge} years older than me.`);
// } else {
//     console.log(`I am ${myAge-yourAge} years older than you.`);
// }


// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. 
// Try to implement it in to ways
const a = 4;
const b = 3;
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${a} is less than ${b}`)
}
a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`)


// 4. Even numbers are divisible by 2 and the remainder is zero.
// How do you check, if a number is even or not using JavaScript?

// let num = prompt('Enter a number');
// if (num % 2 == 0) {
//     console.log(`${num} is an even number`)
// } else {
//     console.log(`${num} is an odd number`)
// }