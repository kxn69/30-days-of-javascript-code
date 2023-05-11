// Exercise: Level 2

// 1. Find the total price of products by chaining two or more array iterators
//(eg. arr.map(callback).filter(callback).reduce(callback))

const ProductsWithPrices = products
.map(item => item.price)
.filter(price => typeof price === 'number')
.reduce((acc, num) => acc + num, 0)
console.log(ProductsWithPrices)


// 2. Find the sum of price of products using only reduce reduce(callback))

// const totalPrice = products.reduce((accumulator, item) => {
//     if (typeof item.price === 'number' && !isNaN(item.price)) {
//       return accumulator + item.price;
//     } else {
//       return accumulator;
//     }
//   }, 0);


const sumOfProducts = products.reduce((acc, item) => {
    if (typeof item.price === 'number') {
        return acc + item.price;
    } else {
        return acc;
    }
}, 0)
console.log(sumOfProducts);


// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern
//(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(arr) {
    const filteredCountry = arr
    .map(item => item.name)
    .filter(name => name.includes('land') || name.includes('ia') || name.includes('island') || name.includes('stan'))
    return filteredCountry
}
console.log(categorizeCountries(countries));


// 4. Create a function which return an array of objects,
// which is the letter and the number of times the letter use to start with a name of a country.

// function countStartingLetters(arr) {

//   }
// console.log(countStartingLetters(countries))


// 5. Declare a getFirstTenCountries function and return an array of ten countries.
// Use different functional programming to work on the countries.js array

function getFirstTenCountries(arr) {
    const filteredCountry = arr
    .slice(0, 10)
    .map(item => item.name)
    return filteredCountry
}
console.log(getFirstTenCountries(countries));


// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

function getLastTenCountries(arr) {
    const filteredCountry = arr
    .slice(-10)
    .map(item => item.name)
    return filteredCountry
}
console.log(getLastTenCountries(countries));


// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
