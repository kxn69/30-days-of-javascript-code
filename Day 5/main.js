// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')

// Exercise: Level 1

  // 1. Declare an empty array
const emptyArray = [];


// 2. Declare an array with more than 5 number of elements
const numberArray = [1, 2, 3, 4, 5, 6, 7];


// 3. Find the length of your array
  console.log(numberArray.length)


// 4. Get the first item, the middle item and the last item of the array
let firstItem = numberArray[0];
  console.log(firstItem);
let middleItem = numberArray[3];
  console.log(middleItem)
let lastItemIndex = numberArray.length - 1
  lastItem = numberArray[lastItemIndex]
  console.log(lastItem);


// 5. Declare an array called mixedDataTypes, put different data types
// in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['bob', 5, true, undefined, {hobby: 'swimming'}, null]
  console.log(mixedDataTypes.length)

  // 6. Declare an array variable name itCompanies and assign initial values
  // Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log('No of companies:', itCompanies.length)
console.log('First Company:', itCompanies[0]) 
console.log('Last Company:', itCompanies[itCompanies.length - 1])


// 7. Print the array using console.log()
console.log(itCompanies)


// 8. Print the number of companies in the array
console.log('No of comapnies:', itCompanies.length)


// 9. Print the first company, middle and last company
console.log('First Company:', itCompanies[0])
console.log('Middle Company:', itCompanies[3])
console.log('Last Company:', itCompanies[6])


// 10. Print out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])


// 11. Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())


// 12. Print the array like as a sentence: Facebook, Google, Microsoft,
// Apple, IBM,Oracle and Amazon are big IT companies.
let listOfCompanies = itCompanies.join(', ')
let sentence = `${listOfCompanies} are big IT companies.`
console.log(sentence);


// 13. Check if a certain company exists in the itCompanies array. 
// If it exist return the company else return a company is not found

const isCompany = 'Facebook'
itCompanies.includes(isCompany) ? console.log(isCompany) : console.log( 'company is not found')


// 14. Filter out companies which have more than one 'o' without the filter method
let companiesWithOO = [];
for (let i = 0; i < itCompanies.length; i++) {
    if ( itCompanies[i].includes('oo')) {
        companiesWithOO.push(itCompanies[i])
    }
}
console.log(companiesWithOO);


// 15. Sort the array using sort() method
console.log(itCompanies.sort())


// 16. Reverse the array using reverse() method
console.log(itCompanies.sort().reverse())


// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))


// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(3, 4))


// 19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(4))


// 20. Remove the first IT company from the array
console.log(itCompanies.splice(0,1))


// 21. Remove the middle IT company or companies from the array
console.log(itCompanies.splice(3,1))


// 22. Remove the last IT company from the array
console.log(itCompanies.splice(4))


// 23. Remove all IT companies
console.log(itCompanies.splice())