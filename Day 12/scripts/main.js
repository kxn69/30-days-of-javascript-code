// Exercises: Level 1

// 1. Calculate the total annual income of the person from the following text. 

const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const salaryRegex = /\d+/g;
const extractedNumbers = text.match(salaryRegex).map(Number);

const monthlySalary = extractedNumbers[0];
const annualBonus = extractedNumbers[1];
const onlineCourses = extractedNumbers[2];

const totalAnnualIncome = `The total annual income of the person is ${monthlySalary + annualBonus + onlineCourses} euros`
console.log(totalAnnualIncome)


// 2.  Extract these numbers and find the distance between the two furthest particles.

const sentence = 'The position of some particles on the horizontal x-axis -1, 2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
const sentenceRegex = /-*\d/g;
const points = sentence.match(sentenceRegex).map(Number)
console.log('points =', points)

const sortedPoints = points.slice().sort((a, b) => a - b);
console.log('sortedPoints =', sortedPoints)

const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];
console.log('distance =', distance)

// 3. Write a pattern which identify if a string is a valid JavaScript variable

function is_valid_variable(variable) {
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
   return regex.test(variable)
}
console.log(is_valid_variable('1firstName'))