// Exercise level 3

// 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
// i. Sort the array and find the min and max age
let sortedAges = ages.sort()
console.log(sortedAges)

let minAge = sortedAges[0]
let maxAge = sortedAges[sortedAges.length - 1]
console.log(`min age: ${minAge} and max age: ${maxAge}`)

// ii. Find the median age(one middle item or two middle items divided by two)
let middleAge1= sortedAges.slice(4, 5)
let middleAge2 = sortedAges.slice(5, 6)
median = (parseInt(middleAge1) + parseInt(middleAge2)) / 2
console.log(median)

// iii. Find the average age(all items divided by number of items)
const sumOfAges = sortedAges.reduce((acc, num) => {
    return acc + num
}, 0)

let averageAge = sumOfAges / sortedAges.length;
console.log('Average age is:', averageAge);

// iv. Find the range of the ages(max minus min)
let range = maxAge - minAge;
console.log(range)

// v. Compare the value of (min - average) and (max - average), use abs() method
let minAvg = Math.abs(minAge - averageAge)
console.log(minAvg)

let maxAvg = Math.abs(maxAge - averageAge)
console.log(maxAvg)

// 2. Slice the first ten countries from the countries array
let slicedCountry = countries.slice(0, 10)
console.log(slicedCountry)


// 3. Find the middle country(ies) in the countries array
let middleCountry = slicedCountry.slice(4, 6);
console.log(middleCountry)


// 4. Divide the countries array into two equal arrays if it is even. 
// If countries array is not even , one more country for the first half.
if (!countries.length % 2 == 0) {
  console.log(countries.splice(0,6), countries)
} 