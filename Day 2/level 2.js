// Exercise level 2

// 1. Using console.log() print out the following statement:
console.log("\'There is no exercise better for the heart than reaching down and lifting people up\
.\' by John Holmes teaches us to help one another.");

// 2. Using console.log() print out the following quote by Mother Teresa:
console.log("\"Love is not patronizing and charity isn't about pity,\
 it is about love. Charity and love are the same -- with charity you give love,\
 so don't just give money but reach out your hand instead.\"");


// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof("10") === typeof(10));
console.log(typeof(Number('10')) === typeof(10));


// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num = parseFloat(9.8);
console.log(num === 10);
console.log(Math.round(num) === 10);


// 5. Check if 'on' is found in both python and jargon
console.log('python'.includes('on'));
console.log('jargon'.includes('on'));


// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let sent1 = 'I hope this course is not full of jargon'
console.log(sent1.search('jargon'));


// 7. Generate a random number between 0 and 100 inclusively.
const num2 = Math.floor(Math.random() * 101);
console.log(num2);


// 8. Generate a random number between 50 and 100 inclusively.
const random_num = Math.floor(Math.random() * 51) + 50;
console.log(random_num);


// 9. Generate a random number between 0 and 255 inclusively.
const random_num2 = Math.floor(Math.random() * 256);


// 10. Access the 'JavaScript' string characters using a random number.
let random_num3 = Math.floor(Math.random() * 11);
console.log(random_num3)

let string = 'Javascript'
random_num3 = string;
console.log(random_num3);


// 11. Use console.log() and escape characters to print the following pattern.
console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');


// 12. Use substr to slice out the phrase because because because from the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
const string2 = 'You cannot end a sentence with because because because is a conjunction';
let startOfBecause = string2.indexOf('because');
let endOfBecause = string2.lastIndexOf('because') + 7;
remBecuase = string2.substring(startOfBecause, endOfBecause);
console.log(remBecuase);