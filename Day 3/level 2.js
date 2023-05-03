// Exercise level 2

// 1. Write a script that prompt the user to enter base and height of the triangle
// and calculate an area of a triangle (area = 0.5 x b x h).

/* let b = prompt('Enter Base', 'Base');
let h = prompt('Enter Height', 'Height')
let areaOfTriangle = 0.5 * b * h
alert(areaOfTriangle); */

// 2. Write a script that prompt the user to enter side a, side b,
// and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

/* let sideA = parseInt(prompt('Enter side a:'));
let sideB = parseInt(prompt('Enter side b:'));
let sideC = parseInt(prompt('Enter side c:'));
let paramOfTriangle = sideA + sideB + sideC;
alert(paramOfTriangle); */

// 3. Get length and width using prompt and calculate an area of rectangle
// (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

/* let lengthOfRect = parseInt(prompt('Enter length'));
let widthOfRect = parseInt(prompt('Enter width'));
areaOfRect = 'Area of the Rectangle is ' + (lengthOfRect * widthOfRect);
let peremOfRect = 'Peremeter of the Rectangle is ' + 2 * (lengthOfRect + widthOfRect);
alert(areaOfRect);
alert(peremOfRect) */

// 4. Get radius using prompt and calculate the area of a circle
// (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

/* const pi = 3.14;
let radius = parseInt(prompt('Enter radius'));
const areaOfCircle = 'Area of cirle is ' + (pi * radius * radius);
let circ =  'Circumfrence of cirle is ' + (2 * pi * radius);
alert(areaOfCircle);
alert(circ); */


// Calculate the slope, x-intercept and y-intercept of y = 2x -2


// calculating the slope
const x1 = 10;
const x2 = 6;
const y1 = 2;
const y2 = 2;
const m = (y2-y1)/(x2-x1);
console.log(m) 

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.


// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

/* let hour = parseInt(prompt('Enter Hours'));
let rate = parseInt(prompt('Enter rate per hour'));
let weeklyEarning = 'Your weekly earning is: ' + (hour * rate);
alert(weeklyEarning); */

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let firstNameLength = firstName.length;
    firstNameLength > 7 
    ? console.log('your name is long')
    : console.log('your name is short') 


// 11. Compare your first name length and your family name length and you should get this output.
let lastNameLength = lastName.length;
    firstNameLength > lastNameLength
    ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
    : console.log(`Your family name, ${lastName}, is longer than your first name, ${firstName}`)


// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
const myAge = 250;
const yourAge = 30;
console.log(`I am ${myAge - yourAge} years older than you.`)


// 13. Using prompt get the year the user was born and if the user is 18 or
// above allow the user to drive if not tell the user to wait a certain amount of years.
/* let birthYear = parseInt(prompt('Enter birth year: '));
let realAge = now.getFullYear() - birthYear;
let reqYear = 18 - realAge;
    birthYear < now.getFullYear() - 18
    ? console.log('you are ' + realAge + '.' + ' You are old enough to drive')
    : console.log('You are ' + realAge + '.' + ' You will be allowed to drive after ' + reqYear + ' years') */


// 14. Write a script that prompt the user to enter number of years. 
//Calculate the number of seconds a person can live. Assume some one lives just hundred years
   /* let yourAge = parseInt(prompt('What\'s your age: '));
    let noOfecondsInYear = 3153600;
    noOfSecondsInYears = yourAge * noOfecondsInYear;
    alert(noOfSecondsInYears) */


// 15. Create a human readable time format using the Date time object
    const year = now.getFullYear()
    const month = now.getMonth() + 1 
    const date = now.getDate()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    hours = hours <= 9 ? '0' + hours : hours;
    minutes = minutes <= 9 ? '0' + minutes : minutes;
    month = month <= 9 ? '0' + month : month;
    console.log(`${year}-${month}-${date}  ${hours}:${minutes}`)
    console.log(`${date}-${month}-${year}  ${hours}:${minutes}`)
    console.log(`${date}/${month}/${month}  ${hours}:${minutes}`)