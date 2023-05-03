const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// Exercise Level 2


// 1. Develop a small script which generate any number of characters random id:
let characters2 = 'abcdefghijklmnopqrstuvwxyz0123456789';
let idLength = 10;
let id2 = '';

for (let i = 0; i < idLength; i++) {
  let randomIndex = Math.floor(Math.random() * characters2.length);
  id2 += characters[randomIndex];
}

console.log(id2);


// 2. Write a script which generates a random hexadecimal number.
let hexChars = '0123456789abcdef';
let hex = '';

for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * hexChars.length);
  hex += hexChars[randomIndex];
}

console.log('#' + hex);


// 3. Write a script which generates a random rgb color number.
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

let rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

console.log(rgbColor);


// 4. Using the above countries array, create the following new array.
const newCountries3 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

const capCountries = []
for (let i = 0; i < newCountries3.length; i++) {
    let country = newCountries3[i].toUpperCase()
    capCountries.push(country)
}
console.log(capCountries)


// 5. Using the above countries array, create an array for countries length'.
const indexCountries = [];
for (let i = 0; i < newCountries3.length; i++) {
    let country = newCountries3[i].length
    indexCountries.push(country)
}
console.log(indexCountries)


// 6. Use the countries array to create the following array of arrays:

const groupCountries = [];
for (let i = 0; i < newCountries3.length; i++) {
    const country = newCountries3[i]
    const abbreviation = country.slice(0, 3).toUpperCase()
    const length = country.length
    groupCountries.push([country, abbreviation, length])
}
console.log(groupCountries)


// 7. In above countries array, check if there is a country or countries containing the word 'land'.
// If there are countries containing 'land', print it as array.
// If there is no country containing the word 'land', print 'All these countries are without land'.

const landCountries2 = []
for (let i = 0; i < newCountries3.length; i++) {
    const country = newCountries3[i]
    if (country.includes('land')) {
        landCountries2.push(country)
    }
}

    if (landCountries2.length > 0) {
        console.log(landCountries2)
    } else {
        console.log('All these countries are without land')
    }

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'.
// If there are countries end with, print it as array.
// If there is no country containing the word 'ai', print 'These  countries ends without ia'.

const countriesWithIa = [];
for (let i = 0; i < newCountries3.length; i++) {
    const country = newCountries3[i]
    if (country.endsWith('ia')) {
        countriesWithIa.push(country)
    }
}
    if (countriesWithIa.length > 0) {
        console.log(countriesWithIa)
    } else {
        console.log('These  countries ends without ia')
    }


// 9. Using the above countries array, find the country containing the biggest number of characters.

let maxCountryLength = 0;
let longestCountry = '';

for (let i = 0; i < newCountries3.length; i++) {
    if (newCountries3[i].length > maxCountryLength) {
        maxCountryLength = newCountries3[i].length
        longestCountry = newCountries3[i]
    }
}
console.log(longestCountry)


// 10. Using the above countries array, find the country containing only 5 characters.
const countriesWith5 = [];
for (let i = 0; i < newCountries3.length; i++) {
    let country = newCountries3[i]
    if (country.length === 5) {
        countriesWith5.push(country)
    }
}

console.log(countriesWith5)


// 11. Find the longest word in the webTechs array
let maxWebLength = 0;
let longestWord = '';

for (let i = 0; i < webTechs.length; i++) {
    if (webTechs[i].length > maxWebLength) {
       maxWebLength = webTechs[i].length
       longestWord = webTechs[i]
    }
}
console.log(longestWord)


// 12. Use the webTechs array to create the following array of arrays:
const groupedArray = [];
for (let i = 0; i < webTechs.length; i++) {
    let word = webTechs[i]
    let length = webTechs[i].length
    groupedArray.push([word, length])
}
console.log(groupedArray)


// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app.
// Create the acronym MERN by using the array mernStack

let acronym = '';
for (let i = 0; i < mernStack.length; i++) {
    let first = mernStack[i][0]
    acronym += first
}
console.log(acronym)

// 14. Iterate through the array, 
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
//  using a for loop or for of loop and print out the items.

const newArray = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i])
}

// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] 
// reverse the order using loop without using a reverse method.

const fruits = ['banana', 'orange', 'mango', 'lemon'];

for (let i = 0; i < fruits.length / 2; i++) {
    const fruit = fruits[i]
    fruits[i] = fruits[fruits.length - 1 - i];
    fruits[fruits.length - 1 - i] = fruit;
} 
console.log(fruits)

// 16.Print all the elements of array as shown below.

 const fullStack = [  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (let i in fullStack) {
  for (let j in fullStack[i]) {
    console.log(fullStack[i][j]);
  }
}