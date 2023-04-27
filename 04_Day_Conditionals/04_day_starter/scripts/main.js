// this is your main.js script

// getting user input using prompt(“Enter your age:”)
// let userAge = prompt('Enter your age:');
// if (userAge >= 18) {
//     console.log('You are old enough to drive')
// } else {
//     console.log(`You need to wait ${18 - userAge} years to be able to drive.`)
// } 

// comparing the values of myAge and yourAge using if … else.
// let myAge = 30
// let yourAge = prompt('Enter your age')
// if (yourAge > myAge) {
//     console.log(`You are ${yourAge-myAge} years older than me.`);
// } else {
//     console.log(`I am ${myAge-yourAge} years older than you.`);
// }
// If a is greater than b
let a = 4;
let b = 3;
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${a} is less than ${b}`)
}
a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`)

// checking if number is an even number
// let num = prompt('Enter a number');
// if (num % 2 == 0) {
//     console.log(`${num} is an even number`)
// } else {
//     console.log(`${num} is an odd number`)
// }

//writing a code which can give grades to students according to theirs scores
score = 79;
if (score >= 80 && score <= 100) {
    console.log('A');
} else if (score >= 70 && score <= 79) {
    console.log('B');
} else if (score >= 60 && score <= 69) {
    console.log('C')
} else if (score >= 50 && score <= 59) {
    console.log('D')
} else {
    console.log('F')
}
// checking if the season is Autumn, Winter, Spring or Summer
userInput = 'December';
if (userInput == 'September' || userInput == 'October' || userInput == 'November') {
    console.log('The season is Autumn');
} else if (userInput == 'December' || userInput == 'January' || userInput == 'Febuary') {
    console.log('the season is Winter');
} else if (userInput == 'June' || userInput == 'July' || userInput == 'August') {
    console.log('the season is Summer');
} else {
    console.log('Enter a valid month')
}
// checking if a day is weekend day or a working day
// let isDay = prompt('What is the day today:').toLowerCase();
// switch(isDay) {
//     case 'monday':
//     case 'tuesday':
//     case 'wednesday':
//     case 'thursday':
//     case 'friday':
//         console.log(`${isDay} is a working day.`)
//     break
//     case 'saturday':
//     case 'sunday':
//         console.log(`${isDay} is a weekend.`)
//     break
// }
// Exercise level 3
// writing a program which tells the number of days in a month

// 
let year = prompt('Enter a year:')
let month = prompt('Enter a month:',).toLowerCase()

if (month === 'january' || month === '1') {
    let january = 1
    getDays = new Date(year, january, 0).getDate();
    alert(`January has ${getDays} days`)

 } else if (month === 'febuary' || month === '2') {
    let febuary = 2
    getDays = new Date(year, febuary, 0).getDate();
    alert(`Febuary has ${getDays} days`)

 } else if (month === 'march' || month === '3') {
    let march = 3
    getDays = new Date(year, march, 0).getDate();
    alert(`March has ${getDays} days`)

 } else if (month === 'april' || month === '4') {
    let april = 4
    getDays = new Date(year, april, 0).getDate();
    alert(`April has ${getDays} days`)

 } else if (month === 'may' || month === '5') {
    let may = 5
    getDays = new Date(year, may, 0).getDate();
    alert(`May has ${getDays} days`)

 } else if (month === 'june' || month === '6') {
    let june = 6
    getDays = new Date(year, june, 0).getDate();
    alert(`June has ${getDays} days`)

 } else if (month === 'july' || month === '7') {
    let july = 7
    getDays = new Date(year, july, 0).getDate();
    alert(`July has ${getDays} days`)

 } else if (month === 'august' || month === '8') {
    let august = 8
    getDays = new Date(year, august, 0).getDate();
    alert(`August has ${getDays} days`)

 } else if (month === 'september' || month === '9') {
    let september = 9
    getDays = new Date(year, september, 0).getDate();
    alert(`September has ${getDays} days`)

 } else if (month === 'october' || month === '10') {
    let october = 10
    getDays = new Date(year, october, 0).getDate();
    alert(`October has ${getDays} days`)
    
 } else if (month === 'november' || month === '11') {
    let november = 11
    getDays = new Date(year, november, 0).getDate();
    alert(`November has ${getDays} days`)
    
 } else if (month === 'december' || month === '12') {
    let december = 12
    getDays = new Date(year, december, 0).getDate();
    alert(`December has ${getDays} days`)

 } else {
    alert('Enter a valid Year and Month')
 }

