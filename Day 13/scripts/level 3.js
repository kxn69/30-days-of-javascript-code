// Exercise Level 3

// 1. Check the speed difference among the following loops: while, for, for of, forEach

// for while loop
console.time('while loop')
let i = 0
while (i < countries.length) {
    countries[i]
    i++
}
console.timeEnd('while loop')
 
// for for loop
console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
  countries[i][0], countries[i][1]
}
console.timeEnd('Regular for loop')

// for for of loop
console.time('for of loop')
for (const country of countries) {
  country
}
console.timeEnd('for of loop')

// for forEach loop
console.time('forEach loop')
countries.forEach((country) => {
    country
})
console.timeEnd('forEach loop')