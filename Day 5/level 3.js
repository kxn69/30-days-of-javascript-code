// Exercise level 3

// 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// i. Sort the array and find the min and max age
const sortedAges = ages.sort()
console.log(sortedAges)

const minAge = Math.min(...ages)
console.log(minAge)
const maxAge = Math.max(...ages)
console.log(`min age: ${minAge} and max age: ${maxAge}`)

// ii. Find the median age(one middle item or two middle items divided by two)
const middleAge1= sortedAges.slice(4, 5);
const middleAge2 = sortedAges.slice(5, 6);
const median = (parseInt(middleAge1) + parseInt(middleAge2)) / 2;
console.log(median);

// iii. Find the average age(all items divided by number of items)
// const sumOfAges = sortedAges.reduce((acc, num) => {
//     return acc + num
// }, 0)
let sumOfAges = 0;
for (let i = 0; i < sortedAges.length; i++) {
  sumOfAges += sortedAges[i]
}
console.log(sumOfAges)

const averageAge = sumOfAges / sortedAges.length;
console.log('Average age is:', averageAge);

// iv. Find the range of the ages(max minus min)
const range = maxAge - minAge;
console.log(range)

// v. Compare the value of (min - average) and (max - average), use abs() method
const minAvg = Math.abs(minAge - averageAge)
console.log(minAvg)

const maxAvg = Math.abs(maxAge - averageAge)
console.log(maxAvg)

// 2. Slice the first ten countries from the countries array
const slicedCountry = countries.slice(0, 10)
console.log(slicedCountry)


// 3. Find the middle country(ies) in the countries array
const middleCountry = slicedCountry.slice(4, 6);
console.log(middleCountry)


// 4. Divide the countries array into two equal arrays if it is even. 
// If countries array is not even , one more country for the first half.
const countries1 = [];
const countries2 = [];

if (!countries.length % 2 === 0) {
  countries1.push(countries.slice(0,5).concat('Niger'));
  countries2.push(countries.slice(5,11));
}
// console.log(countries1.push(['Nigeria']));
console.log(countries1);
console.log(countries2)