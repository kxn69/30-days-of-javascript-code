// Exercise: level 1

// 1. Declaring a variable and assigning it a value
const challenge = '30 Days Of JavaScript';


// 2. Print the string on the browser console using console.log()
console.log(challenge);


// 3. Print the length of the string on the browser console using console.log()
console.log(challenge.length);


// 4. changing the string characters to capital letters using uppercase()
let capitalStr = challenge.toUpperCase();
console.log(capitalStr);


// 5. changing the string characters to capital letters using lowercase()
let lowerStr = challenge.toLowerCase();
console.log(lowerStr);


// 6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0, 2));


// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
newSlice = challenge.substring(11);
console.log(newSlice);


// 8. Check if the string contains a word Script using includes() method
console.log(newSlice.includes('Script'));


// 9. Split the string into an array using split() method
console.log(challenge.split())


// 10. Split the string into an array using split() method
console.log(challenge.split(' '));



// 11. Split the string 30 Days Of JavaScript at the space using split() method
const newStr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(newStr.split(','))


// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Phyton'));


// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));


// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11));


// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));


// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));


// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:
const str2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(str2.indexOf('because'));


// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:
console.log(str2.lastIndexOf('because'));


// 19. Use search to find the position of the first occurrence of the word because in the following sentence 
console.log(str2.search('because'));


// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
const str3 = '    30 Days Of JavaScript     ';
console.log(str3);
console.log(str3.trim(' '));


// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith(30));


// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('Script'));


// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
let pattern = /a/g;
console.log(challenge.match(pattern));


// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
const subStr1 = '30 Days of ';
const subStr2 = 'JavaScript';
console.log(subStr1.concat(subStr2));


// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));