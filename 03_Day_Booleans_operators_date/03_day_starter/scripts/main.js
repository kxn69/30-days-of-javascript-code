// Exercises: Level 1
// Declaring variables and using typeof to check variables
let firstName = 'Matthew';
let lastName = 'Ariyo';
let country = 'Nigeria';
let city = 'Ilorin';
let age = '23';
let isMarried = false;
let thisYear = 2023;
// typeof
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(thisYear));
// checking if '10' equals 10
console.log(typeof('10') === typeof(10));
// checking if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10);
// three javascript statement that provide truthy value
let isCoding = true;
let trueValue = 5 > 3;
let trueValue2 = 4 > 1;
// three javascript statement that provide falsy value
let falValue = null;
let emptyStr = "";
let isSleeping = false;
// figuring out the following expressions before using console.log
4 > 3; // true
4 >= 3 // true
4 < 3 // false
4 <= 3 // false
4 == 4 // true
4 === 4 // true
4 != 4 // false
4 !== 4 // false
4 != '4' //false
4 == '4' //true
4 === '4' // false
// finding the length of python and jargon
let py = 'python'.length;
let jr = 'jargon'.length;
console.log(py < jr);
// figuring out the result of the following expressions first without using console.log
4 > 3 && 10 < 12 // true
4 > 3 && 10 > 12 //false
4 > 3 || 10 < 12 // true
4 > 3 || 10 > 12 // true
!(4 > 3) // false
!(4 < 3) // true
!(false) // true
!(4 > 3 && 10 < 12) // false
!(4 > 3 && 10 > 12) // true
!(4 === '4') // true
// There is no 'on' in both dragon and python false 
// using the Date object to do the following activities
const now = new Date();
console.log(now.getFullYear()); // year today
console.log(now.getMonth() + 1); // month today
console.log(now.getDate()); // date today
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime())
// Exercise level 2
// writing a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle
/* let b = prompt('Enter Base', 'Base');
let h = prompt('Enter Height', 'Height')
let areaOfTriangle = 0.5 * b * h
alert(areaOfTriangle); */

// writing a script that prompt the user to enter side a, side b, and side c of the triangle
/* let sideA = parseInt(prompt('Enter side a:'));
let sideB = parseInt(prompt('Enter side b:'));
let sideC = parseInt(prompt('Enter side c:'));
let paramOfTriangle = sideA + sideB + sideC;
alert(paramOfTriangle); */

// getting length and width using prompt and calculate an area of rectangle
/* let lengthOfRect = parseInt(prompt('Enter length'));
let widthOfRect = parseInt(prompt('Enter width'));
areaOfRect = 'Area of the Rectangle is ' + (lengthOfRect * widthOfRect);
let peremOfRect = 'Peremeter of the Rectangle is ' + 2 * (lengthOfRect + widthOfRect);
alert(areaOfRect);
alert(peremOfRect) */

// getting radius using prompt and calculate the area of a circle
/* const pi = 3.14;
let radius = parseInt(prompt('Enter radius'));
const areaOfCircle = 'Area of cirle is ' + (pi * radius * radius);
let circ =  'Circumfrence of cirle is ' + (2 * pi * radius);
alert(areaOfCircle);
alert(circ); */

// calculating the slope
let x1 = 10;
let x2 = 6;
let y1 = 2;
let y2 = 2;
const m = (y2-y1)/(x2-x1);
console.log(m) 
// writing a script that prompt a user to enter hours and rate per hour
/* let hour = parseInt(prompt('Enter Hours'));
let rate = parseInt(prompt('Enter rate per hour'));
let weeklyEarning = 'Your weekly earning is: ' + (hour * rate);
alert(weeklyEarning); */

// checking length of name
/* let firstNameLength = firstName.length;
    firstNameLength > 7 
    ? console.log('your name is long')
    : console.log('your name is short') */
// comparing first name and family name
/* let lastNameLength = lastName.length;
    firstNameLength > lastNameLength
    ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
    : console.log(`Your family name, ${lastName}, is longer than your first name, ${firstName}`)

    // declaring two variables
myAge = 250;
yourAge = 30;
console.log(`I am ${myAge - yourAge} years older than you.`) */

// using prompt to get year user was born
/* let birthYear = parseInt(prompt('Enter birth year: '));
let realAge = now.getFullYear() - birthYear;
let reqYear = 18 - realAge;
    birthYear < now.getFullYear() - 18
    ? console.log('you are ' + realAge + '.' + ' You are old enough to drive')
    : console.log('You are ' + realAge + '.' + ' You will be allowed to drive after ' + reqYear + ' years') */

    // writing a script that prompt the user to enter number of years
   /* let yourAge = parseInt(prompt('What\'s your age: '));
    let noOfecondsInYear = 3153600;
    noOfSecondsInYears = yourAge * noOfecondsInYear;
    alert(noOfSecondsInYears) */

    // creating a readable time format using the date time object
    const year = now.getFullYear()
    let month = now.getMonth() + 1 
    const date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    hours = hours <= 9 ? '0' + hours : hours;
    minutes = minutes <= 9 ? '0' + minutes : minutes;
    month = month <= 9 ? '0' + month : month;
    console.log(`${year}-${month}-${date}  ${hours}:${minutes}`)
    console.log(`${date}-${month}-${year}  ${hours}:${minutes}`)
    console.log(`${date}/${month}/${month}  ${hours}:${minutes}`)

    // creating a human readble time format
let clock = `${year}-${month}-${date}  ${hours}:${minutes}`
console.log(clock)