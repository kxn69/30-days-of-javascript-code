// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
// Exercise 1

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop

// i. using for loop
for (let i = 0; i <= 10; i ++) {
    console.log(i)
}

// ii. using the while loop
let i = 0;
while (i <= 10) {
    console.log(i)
    i++
}

// using do while loop
let num = 0;
do {
    console.log(num)
    num++
} while (num <= 10)


// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
// i. using for loop
for (let i = 10; i >= 0; i--) {
    console.log(i)
}

// ii. using while loop
let num2 = 10;
while (num2 >= 0) {
    console.log(num2)
    num2--
}

// iii. using do while loop
let num3 = 10;
do {
    console.log(num3)
    num3--
} while (num3 >= 0)


// 3. Iterate 0 to n using for loop
// for (let i = 0; i < n; i++) {
//     console.log(i)
// }

// 4. Write a loop that makes the following pattern using console.log():
let sym = '#';
while (sym.length < 8) {
    console.log(sym)
    sym += '#'
}

// 5. Use loop to print the following pattern:
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
  }


// 6. Using loop print the following pattern
for (let i = 0; i <= 10; i++) {
    console.log(i, Math.pow(i, 2), Math.pow(i, 3))
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
    if (!(i % 2 === 0)) {
        console.log(i)
    }
}

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }

    }

    if (isPrime) {
      console.log(i);
    }
  }


// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    
    sum = sum + i
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)


// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenSum = 0;
let oddSum = 0;
const sumArray = [];

// for even number
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        evenSum += i
    }
}

// for odd number
for (let i = 0; i <= 100; i++) {
    if (!(i % 2 === 0)) {
        oddSum += i
    }
}

console.log(`The sum of all evens from 0 to 100 is ${evenSum} and the sum of all odds from 0 to 100 is ${oddSum}.`)


// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
sumArray.push(evenSum)
sumArray.push(oddSum)

console.log(sumArray)


// 13. Develop a small script which generate array of 5 random numbers
let random_array = [];

for (let i = 0; i <= 5; i++) {
    random_array.push(Math.floor(Math.random() * 11))
}
console.log(random_array) 


// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomNumbers = [];

while (randomNumbers.length < 5) {
    let num = Math.floor(Math.random() * 10) + 1;
    
    if (!randomNumbers.includes(num)) {
        randomNumbers.push(num);
    }
}
console.log(randomNumbers)


// 15. Develop a small script which generate a six characters random id:
let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let id = '';

for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * characters.length);
  id += characters[randomIndex];
}

console.log(id);