// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Exercise: Level 1
const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. Explain the difference between forEach, map, filter, and reduce.

/* for each is used only with arrays while 
(map) is used to modify array Element
filter is used to fufil a condition and return a new array
and reduce returns a single value from a calculation of the preceding element */


// 2. Define a callback function before you use it in forEach, map, filter or reduce.
const callback = (a) => {
    return a * 2;
} 

function multiply(callback, a) {
    return callback(a) * 2
}
console.log(multiply(callback, 3))


// 3. Use forEach to console.log each country in the countries array.

countries2.forEach((country) => console.log(country));

// 4. Use forEach to console.log each name in the names array.

names.forEach(name => console.log(name));

// 5. Use forEach to console.log each number in the numbers array.

numbers.forEach(number => console.log(number));

// 6. Use map to create a new array by changing each country to uppercase in the countries array.
const capitalCountries = countries2.map((country) => country.toUpperCase());
console.log(capitalCountries);


// 7. Use map to create an array of countries length from countries array.

const countriesLength = countries2.map((country) => country.length)
console.log(countriesLength);


// 8. Use map to create a new array by changing each number to square in the numbers array

const squaredNumbers = numbers.map((num) => Math.pow(num, 2));
console.log(squaredNumbers);


// 9. Use map to change to each name to uppercase in the names array

const capitalNames = names.map((name) => name.toUpperCase());
console.log(capitalNames);


// 10. Use map to map the products array to its corresponding prices.

const mappedArray = products.map((item) => item.price)
console.log(mappedArray)


// 11. Use filter to filter out countries containing land.
const landRegex = /land/gi
const countriesWithLand = countries2.filter((country) => country.match(landRegex));
console.log(countriesWithLand);


// 12. Use filter to filter out countries having six character.

const countriesWithSix = countries2.filter((country) => country.length === 6);
console.log(countriesWithSix);


// 13. Use filter to filter out countries containing six letters and more in the country array.

const countriesWithSixAndMore = countries2.filter((country) => country.length >= 6);
console.log(countriesWithSixAndMore);


// 14. Use filter to filter out country start with 'E';

const countriesWithE = countries2.filter((country) => country.startsWith('E'))
console.log(countriesWithE);


// 15. Use filter to filter out only prices with values.


const filteredProducts = products.filter(item => typeof item.price === 'number' );
console.log(filteredProducts);


// 16. Declare a function called getStringLists which takes an array as a parameter
// and then returns an array only with string items.

const mixedArray = [1, 'apple', true, 'orange', 42, 'banana'];

function getStringLists(arr) {
    const stringList = arr.filter(item => typeof item === 'string')
    return stringList;
}
console.log(getStringLists(mixedArray));


// 17. Use reduce to sum all the numbers in the numbers array.

const sumAll = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumAll);


// 18. Use reduce to concatenate all the countries and to produce this sentence:
// Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const result = countries2.reduce((sentence, country, index) => {
    if (index === countries2.length - 1) {
      return `${sentence}and ${country}`;
    } else {
        return `${sentence}${country}, `;
      }
  }, '');
const finalSentence = `${result} are north European countries.`
console.log(finalSentence);


// 19. Explain the difference between some and every

// some checks if some of the elements are similar, while every checks all

// 20. Use some to check if some names' length greater than seven in names array

const namesGreaterThan7 = names.some((name) => name.length > 7)
console.log(namesGreaterThan7);


// 21. Use every to check if all the countries contain the word land


const landCountries = countries2.every((item) => item.match(landRegex))
console.log(landCountries);


// 22. Explain the difference between find and findIndex.

// find returns the first value that satisfies the solution while
// findIndex returns the first index of the positon that satisfies the solution


//23. Use find to find the first country containing only six letters in the countries array

const countryWithSix = countries2.find(country => country.length === 6);
console.log(countryWithSix);


//24. Use findIndex to find the position of the first country containing only six letters in the countries array

const countryWithSixIndex = countries2.findIndex(country => country.length === 6);
console.log(countryWithSixIndex);


// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1

const positionOfNorway = countries2.findIndex(country => country.includes('Norway'))
console.log(positionOfNorway);


//26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

const positionOfRussia = countries2.findIndex(country => country.includes('Russia'))
console.log(positionOfRussia);