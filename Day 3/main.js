// Exercises: Level 1

// Declare firstName, lastName, country, city, age, isMarried, year variable
// and assign value to it and use the typeof operator to check different data types.
const firstName = 'Matthew';
const lastName = 'Ariyo';
const country = 'Nigeria';
const city = 'Ilorin';
const age = '23';
const isMarried = false;
const thisYear = 2023;

// typeof
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(thisYear));


// 2. Check if type of '10' is equal to 10
console.log(typeof('10') === typeof(10));


// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10);


// 4. Boolean value is either true or false.
// i. Write three JavaScript statement which provide truthy value.
let isCoding = true;
let trueValue = 5 > 3;
let trueValue2 = 4 > 1;

// ii. Write three JavaScript statement which provide falsy value.
let falValue = null;
let emptyStr = "";
let isSleeping = false;


// 5. Figure out the result of the following comparison expression first without using console.log().
// After you decide the result confirm it using console.log()
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

// xii. finding the length of python and jargon
let py = 'python'.length;
let jr = 'jargon'.length;
console.log(py < jr);


// 6. Figure out the result of the following expressions first without using console.log().
// After you decide the result confirm it by using console.log()
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


// 7. Use the Date object to do the following activities
const now = new Date();
console.log(now.getFullYear()); // year today
console.log(now.getMonth() + 1); // month today
console.log(now.getDate()); // date today
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime())