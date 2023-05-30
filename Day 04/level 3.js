// Exercise level 3


// 1. Write a program which tells the number of days in a month.

const year = prompt('Enter a year:')
const month = prompt('Enter a month:',).toLowerCase()

if (month === 'january' || month === '1') {
    let january = 1
    getDays = new Date(year, january, 0).getDate();
    alert(`January has ${getDays} days`)

 } else if (month === 'february' || month === '2') {
    let february = 2
    getDays = new Date(year, february, 0).getDate();
    alert(`february has ${getDays} days`)

 } else if (month === 'march' || month === '3') {
    let march = 3
    getDays = new Date(year, march, 0).getDate();
    alert(`March has ${getDays} days`)

 } else if (month === 'april' || month === '4') {
    let april = 4
    getDays = new Date(year, april, 0).getDate();
    alert(`April has ${getDays} days`)

 } else if (month === 'may' || month === '5') {
    let may = 5
    getDays = new Date(year, may, 0).getDate();
    alert(`May has ${getDays} days`)

 } else if (month === 'june' || month === '6') {
    let june = 6
    getDays = new Date(year, june, 0).getDate();
    alert(`June has ${getDays} days`)

 } else if (month === 'july' || month === '7') {
    let july = 7
    getDays = new Date(year, july, 0).getDate();
    alert(`July has ${getDays} days`)

 } else if (month === 'august' || month === '8') {
    let august = 8
    getDays = new Date(year, august, 0).getDate();
    alert(`August has ${getDays} days`)

 } else if (month === 'september' || month === '9') {
    let september = 9
    getDays = new Date(year, september, 0).getDate();
    alert(`September has ${getDays} days`)

 } else if (month === 'october' || month === '10') {
    let october = 10
    getDays = new Date(year, october, 0).getDate();
    alert(`October has ${getDays} days`)
    
 } else if (month === 'november' || month === '11') {
    let november = 11
    getDays = new Date(year, november, 0).getDate();
    alert(`November has ${getDays} days`)
    
 } else if (month === 'december' || month === '12') {
    let december = 12
    getDays = new Date(year, december, 0).getDate();
    alert(`December has ${getDays} days`)

 } else {
    alert('Enter a valid Year and Month')
 }