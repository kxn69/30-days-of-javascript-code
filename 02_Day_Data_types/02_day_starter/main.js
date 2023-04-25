// Exercise: level 1
// Declaring a variable and assigning it a value
const str = '30 Days Of JavaScript';
// logging to the browser console
console.log(str);
// printing the length of the string on the browser console
console.log(str.length);
// changing the string characters to capital letters using uppercase()
let capitalStr = str.toUpperCase();
console.log(capitalStr);
// changing the string characters to capital letters using lowercase()
let lowerStr = str.toLowerCase();
console.log(lowerStr);
// slicing out the first word of the string using substr() method
console.log(str.substring(0, 2));
// slicing out the phrase Days Of JavaScript from 30 Days Of JavaScript.
newSlice = str.substring(11);
console.log(newSlice);
// checking if the string contains a word Script
console.log(newSlice.includes('Script'));
// splitting the string 30 Days Of JavaScript at the space
console.log(str.split(' '));
// splitting the string at the comma
let newStr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(newStr.split(','))
// changing  30 Days Of JavaScript to 30 Days Of Python
console.log(str.replace('JavaScript', 'Phyton'));
// checking the character at index 15 using charAt
console.log(str.charAt(15));
// character code of J in '30 Days Of JavaScript'
console.log(str.charCodeAt(11));
// Using indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(str.indexOf('a'));
// using lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript
console.log(str.lastIndexOf('a'));
// using indexOf to find the position of the first occurrence of the word because
const str2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(str2.indexOf('because'));
// using lastIndexOf to find the position of the last occurrence of the word because
console.log(str2.lastIndexOf('because'));
// using search to find the position of the first occurrence of the word because 
console.log(str2.search('because'));
// using trim() to remove any trailing whitespace at the beginning and the end of a string
const str3 = '    30 Days Of JavaScript     ';
console.log(str3);
console.log(str3.trim(' '));
// using startsWith() method
console.log(str.startsWith(30));
// using endsWith() method
console.log(str.endsWith('Script'));
// using match() method to find all the a’s in 30 Days Of JavaScript
let pattern = /a/g;
console.log(str.match(pattern));
// using concat() to merge '30 Days of' and 'JavaScript' to a single string
let subStr1 = '30 Days of ';
let subStr2 = 'JavaScript';
console.log(subStr1.concat(subStr2));
// using repeat() method to print 30 Days Of JavaScript 2 times
console.log(str.repeat(2));

// Exercise level 2
// Using console.log() to print out the following statement
console.log("\'There is no exercise better for the heart than reaching down and lifting people up\
.\' by John Holmes teaches us to help one another.");
console.log("\"Love is not patronizing and charity isn't about pity,\
 it is about love. Charity and love are the same -- with charity you give love,\
 so don't just give money but reach out your hand instead.\"");
// checking if type 0f '10' equals 10 and mkaing it equal if not 
console.log(typeof("10") === typeof(10));
console.log(typeof(Number('10')) === typeof(10));
// checking if parseFloat('9.8') is equal to 10
let num = parseFloat(9.8);
console.log(num === 10);
console.log(Math.round(num) === 10);
// checking if 'o' is found in both python and jargon
console.log('python'.search('o'));
console.log('jargon'.search('o'));
// checking if jargon is not in the sentence
let sent1 = 'I hope this course is not full of jargon'
console.log(sent1.search('jargon'));
// creating a random number between 0 to 100
const num2 = Math.floor(Math.random() * 101);
console.log(num2);
// generating random number between 50 to 100;
const random_num = Math.floor(Math.random() * 51) + 50;
console.log(random_num);
// generating random number between 0 and 255
const random_num2 = Math.floor(Math.random() * 256);
// accessing the 'JavaScript' string characters using a random number.
let random_num3 = Math.floor(Math.random() * 11);
let string = 'Javascript'
random_num3 = string;
console.log(2);
// using console.log() and escape characters to print the following pattern.
console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');
// using substr to slice out the phrase because because because
const string2 = 'You cannot end a sentence with because because because is a conjunction';
let startOfBecause = string2.indexOf('because');
let endOfBecause = string2.lastIndexOf('because') + 7;
remBecuase = string2.substring(startOfBecause, endOfBecause);
console.log(remBecuase);
// Exercises: level 3
// Ex 1
const loveQuote = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let lovePattern = /love/gi; 
loveMatch = loveQuote.match(lovePattern).length;
console.log(loveMatch);
// Ex 2
const string3 = 'You cannot end a sentence with because because because is a conjunction';
let becPattern = /because/g;
matchPattern = string3.match(becPattern).length;
// Ex 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let matchRegex = /[^\w,.\s]/gi;
let cleanSentence = sentence.replace(matchRegex, '');
console.log(cleanSentence)
let word = cleanSentence.split(" ");
// Ex 4
string4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let salary = 5000; // per month
let annualBonus = 10000; 
let onlineCourses = 15000;
totalAnnualIncome = (salary * 12) + annualBonus + (onlineCourses * 12);
console.log(totalAnnualIncome);
