// Exercise level 3 

// 1. Copy countries array(Avoid mutation)
const newCountries = [];
newCountries.push(countries)
console.log(newCountries)


// 2. Arrays are mutable. Create a copy of array which does not modify the original.
// Sort the copied array and store in a variable sortedCountries
const sortedCountries = [];
sortedCountries.push(countries.sort())
console.log(sortedCountries)


// 3. Sort the webTechs array and mernStack array
const sortedWebTechs = webTechs.sort()
console.log(sortedWebTechs)

// sorting mernStack array
const sortedMernStack = mernStack.sort()
console.log(sortedMernStack)


// 4. Extract all the countries contain the word 'land' from the countries array and print it as array
const landCountries = [];
for (let i = 0; i < countries.length; i++) {
    let country = countries[i]
    if (country.includes('land')) {
        landCountries.push(country)
    }
}
console.log(landCountries)


// 5. Find the country containing the hightest number of characters in the countries array
let maxLength = 0;
let country = '';

for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > maxLength) {
      maxLength = countries[i].length
      country = countries[i]
    }
  }
console.log(country)


// 7. Extract all the countries containing only four characters from the countries array and print it as array
const countriesWith4Chars = [];
for (let i = 0; i < countries.length; i++) {
    let country = countries[i]
    if (country.length === 4) {
        countriesWith4Chars.push(country)
    }
}
console.log(countriesWith4Chars)


// 8. Extract all the countries containing two or more words from the countries array and print it as array
const newCountries2 = [];
for (let i = 0; i < countries.length; i++) {
    let country = countries[i]
    if (country.length > 2) {
        newCountries2.push(country)
    }
}
console.log(newCountries2)


// 9. Reverse the countries array and capitalize each country and stored it as an array
const capitalCountries = [];
const reverseCountries = countries.reverse()

for (const country of reverseCountries) {
    const capitalCountry = country.toUpperCase()
    capitalCountries.push(capitalCountry)
    
}
console.log(capitalCountries);