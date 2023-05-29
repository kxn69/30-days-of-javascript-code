// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Exercise: Level 1 
const miniCountries = ['Finland', 'Sweden', 'Norway']

// 1. create an empty set
const emptySet = new Set()


// 2. Create a set containing 0 to 10 using loop

const setOfNumbers = new Set();

for (let i = 0; i <= 10; i++) {
    setOfNumbers.add(i)
}
console.log(setOfNumbers);


// 3. Remove an element from a set
const miniCountriesSet = new Set(miniCountries);
miniCountriesSet.delete('Norway');
console.log(miniCountriesSet)


// 4. Clear a set
miniCountriesSet.clear()
console.log(miniCountriesSet)


// 5. Create a set of 5 string elements from array

const stringElements = ['hakimi', 'ron', 'joe', 'kxn', 'sally']

const newStringElements = new Set(stringElements)
console.log(newStringElements)


// 6. Create a map of countries and number of characters of a country

const newMiniCountries = new Set(miniCountries)

const counts = []
for (const country of newMiniCountries) {
    counts.push({country: country, countryLength: country.length})
}
console.log(counts)
