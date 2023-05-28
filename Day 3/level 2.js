// Exercise level 2


// 1. Write a script that prompt the user to enter base and height of the triangle
// and calculate an area of a triangle (area = 0.5 x b x h).

// const b = prompt('Enter Base', 'Base');
// const h = prompt('Enter Height', 'Height')
// const areaOfTriangle = 0.5 * b * h
// alert(areaOfTriangle); 


// 2. Write a script that prompt the user to enter side a, side b,
// and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// const sideA = parseInt(prompt('Enter side a:'));
// const sideB = parseInt(prompt('Enter side b:'));
// const sideC = parseInt(prompt('Enter side c:'));
// const paramOfTriangle = sideA + sideB + sideC;
// alert(paramOfTriangle); 


// 3. Get length and width using prompt and calculate an area of rectangle
// (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// const lengthOfRect = parseInt(prompt('Enter length'));
// const widthOfRect = parseInt(prompt('Enter width'));
// const areaOfRect = 'Area of the Rectangle is ' + (lengthOfRect * widthOfRect);
// const perimeterOfRectangle = 'Perimeter of the Rectangle is ' + 2 * (lengthOfRect + widthOfRect);
// alert(areaOfRect);
// alert(perimeterOfRectangle);


// 4. Get radius using prompt and calculate the area of a circle
// (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// const pi = 3.14;
// const radius = parseInt(prompt('Enter radius'));
// const areaOfCircle = 'Area of circle is ' + (pi * radius * radius);
// const circ =  'Circumference of circle is ' + (2 * pi * radius);
// alert(areaOfCircle);
// alert(circ);


// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Slope (m) is the coefficient of x
const slope = 2;

// X-intercept is the value of x when y = 0
// Set y = 0 and solve for x: 0 = 2x - 2
// 2x = 2
// x = 1
const xIntercept = 1;

// Y-intercept is the value of y when x = 0
// Set x = 0 and solve for y: y = 2(0) - 2
// y = -2
const yIntercept = -2;

// Output the results
console.log("Slope (m):", slope);
console.log("X-intercept:", xIntercept);
console.log("Y-intercept:", yIntercept);


// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
const x1 = 10;
const x2 = 6;
const y1 = 2;
const y2 = 2;
const slope2 = (y2 - y1) / (x2 - x1);
console.log(slope2) 


// 7. Compare the slope of above two questions.



// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
for (let x = -100; x <= 100; x++) {
    const y = x ** 2 + 6 * x + 9;
    if (y === 0) {
      console.log("x value where y is 0:", x);
      break;
    }
  }


// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// const hour = parseInt(prompt('Enter Hours'));
// const rate = parseInt(prompt('Enter rate per hour'));
// const weeklyEarning = 'Your weekly earning is: ' + (hour * rate);
// alert(weeklyEarning); 


// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
const firstNameLength = firstName.length;
    firstNameLength > 7 
    ? console.log('your name is long')
    : console.log('your name is short') 


// 11. Compare your first name length and your family name length and you should get this output.
const lastNameLength = lastName.length;
    firstNameLength > lastNameLength
    ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
    : console.log(`Your family name, ${lastName}, is longer than your first name, ${firstName}`)


// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
const myAge = 250;
const yourAge = 30;
console.log(`I am ${myAge - yourAge} years older than you.`)


// 13. Using prompt get the year the user was born and if the user is 18 or
// above allow the user to drive if not tell the user to wait a certain amount of years.

// const birthYear = parseInt(prompt('Enter birth year: '));
// let realAge = now.getFullYear() - birthYear;
// let reqYear = 18 - realAge;
//     birthYear < now.getFullYear() - 18
//     ? console.log('you are ' + realAge + '.' + ' You are old enough to drive')
//     : console.log('You are ' + realAge + '.' + ' You will be allowed to drive after ' + reqYear + ' years')


// 14. Write a script that prompt the user to enter number of years. 
//Calculate the number of seconds a person can live. Assume some one lives just hundred years

// const enterAge = parseInt(prompt('What\'s your age: '));
// const noOfSecondsInYear = 3153600;
// noOfSecondsInYears = enterAge * noOfSecondsInYear;
// alert(noOfSecondsInYears);


// 15. Create a human readable time format using the Date time object
    const year = now.getFullYear()
    let month = now.getMonth() + 1 
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    hours = hours <= 9 ? '0' + hours : hours;
    minutes = minutes <= 9 ? '0' + minutes : minutes;
    month = month <= 9 ? '0' + month : month;
    console.log(`${year}-${month}-${date}  ${hours}:${minutes}`)
    console.log(`${date}-${month}-${year}  ${hours}:${minutes}`)
    console.log(`${date}/${month}/${month}  ${hours}:${minutes}`)