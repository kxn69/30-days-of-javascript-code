// Exercise level 2

// 1. Write a code which can give grades to students according to theirs scores:

const score = 89;
if (score >= 80) {
    console.log('A');
} else if (score >= 70 && score <= 79) {
    console.log('B');
} else if (score >= 60 && score <= 69) {
    console.log('C')
} else if (score >= 50 && score <= 59) {
    console.log('D')
} else {
    console.log('F')
}


// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

const userInput = 'March';
if (userInput === 'September' || userInput === 'October' || userInput === 'November') {
    console.log('The season is Autumn');
} else if (userInput === 'December' || userInput === 'January' || userInput === 'February') {
    console.log('the season is Winter');
} else if (userInput === 'March' || userInput === 'April' || userInput === 'May') {
    console.log('the season is Spring');
} else if (userInput === 'June' || userInput === 'July' || userInput === 'August') {
    console.log('the season is Summer');
} else {
    console.log('Enter a valid month')
}


// 3. Check if a day is weekend day or a working day. Your script will take day as an input.

// const isDay = prompt('What is the day today:').toLowerCase();
// switch(isDay) {
//     case 'monday':
//     case 'tuesday':
//     case 'wednesday':
//     case 'thursday':
//     case 'friday':
//         console.log(`${isDay} is a working day!`)
//     break
//     case 'saturday':
//     case 'sunday':
//         console.log(`${isDay} is a weekend!`)
//     break
// }