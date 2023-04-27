// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')

// Exercise: Level 1
  // declaring an empty array
const emptyArray = [];
  // declaring an array with more than 5 number of elements
const numberArray = [1, 2, 3, 4, 5, 6, 7];
  console.log(numberArray.length)
  // getting the first item, the middle item and the last item of the array
let firstItem = numberArray[0];
  console.log(firstItem);
let middleItem = numberArray[3];
  console.log(middleItem)
let lastItemIndex = numberArray.length - 1
  lastItem = numberArray[lastItemIndex]
  console.log(lastItem);
  // delcaring an array called mixedDataTypes
const mixedDataTypes = ['bob', 5, true, undefined, {hobby: 'swimming'}, null]
  console.log(mixedDataTypes.length)

  // declaring an array variable name itCompanies
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log('No of companies:', itCompanies.length)
console.log('First Company:', itCompanies[0]) 
console.log('Last Company:', itCompanies[itCompanies.length - 1])
// printing out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])
// changing  each company name to uppercase
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())
// printing the array like as a sentence
let listOfCompanies = itCompanies.join(', ')
let sentence = `${listOfCompanies} are big IT companies.`
console.log(sentence);
// checking if a certain company exists in the array
isCompany = 'Facebook'
itCompanies.includes(isCompany) ? console.log(isCompany) :console.log( 'company is not found')

// filtering out companies which have more than one 'o' without the filter method 
let companiesWithOO = [];
for (let i = 0; i < itCompanies.length; i++) {
    if ( itCompanies[i].includes('oo')) {
        companiesWithOO.push(itCompanies[i])
    }
}
console.log(companiesWithOO);

// sorting the array
console.log(itCompanies.sort())

// reversing the array
console.log(itCompanies.sort().reverse())

// slicing out the first 3 comapnies of the array
// console.log(itCompanies.slice(0, 3))

// removing the middle company
console.log(itCompanies.slice(3, 4))

// slicing out the last 3 companies
console.log(itCompanies.slice(4))

// removing the first It company from the array
console.log(itCompanies.splice(0,1))

// removing the middle
console.log(itCompanies.splice(3,1))
// removing the last
console.log(itCompanies.splice(4))

// removing all
console.log(itCompanies.splice())

//Exercise level 2
console.log(countries);
console.log(webTechs)

// removing alll punctuations and changing string to an array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
textRegex = /\w+/gi
let newText = text.match(textRegex)
console.log(newText);
console.log(newText.length)

//  shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// adding meat
shoppingCart.unshift('Meat')
// adding sugar
shoppingCart.push('Sugar')
shoppingCart.splice(4,1)
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)

// checking if ethiopia exists in country array
if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA')
} else {
    countries.push('Ethiopia')
}

// checking if sass exists in webTech array
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess')
} else {
    webTechs.push('Sass')
}

// concatinating the following two variables 
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let frontAndBackEnd = frontEnd.concat(backEnd)
console.log(frontAndBackEnd)

// Exercise level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sortedAges = ages.sort()
console.log(sortedAges)
// finding the mean and max ages
let minAge = sortedAges[0]
let maxAge = sortedAges[sortedAges.length - 1]
console.log(`min age: ${minAge} and max age: ${maxAge}`)

// finding the middle age
let middleAge1= sortedAges.slice(4, 5)
let middleAge2 = sortedAges.slice(5, 6)
median = (parseInt(middleAge1) + parseInt(middleAge2)) / 2
console.log(median)

// finding average age
const sumOfAges = sortedAges.reduce((acc, num) => {
    return acc + num
}, 0)
let averageAge = sumOfAges / sortedAges.length;
console.log('Average age is:', averageAge);

// finding range 
let range = maxAge - minAge;
console.log(range)

// comparing (min-average) && (max-average)
let minAvg = Math.abs(minAge - averageAge)
console.log(minAvg)

let maxAvg = Math.abs(maxAge - averageAge)
console.log(maxAvg)

// slicing the first 10 countries from country array
let slicedCountry = countries.slice(0, 10)
console.log(slicedCountry)

// finding middle country
let middleCountry = slicedCountry.slice(4, 6);
console.log(middleCountry)

// dividing the countries into two equal arrays
if (!countries.length % 2 == 0) {
  console.log(countries.splice(0,6), countries)
} 