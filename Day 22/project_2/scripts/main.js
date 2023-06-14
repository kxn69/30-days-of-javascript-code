// get body element using querySelector
const bodyElement = document.querySelector('body')
bodyElement.style.textAlign = 'center';

// get header element
const header = document.querySelector('header')



// get h2 element using querySelector
const h2Element = document.querySelector('h2')
h2Element.style.fontSize = '50px';
h2Element.style.fontFamily = 'calibri';
h2Element.style.margin = 'auto';
h2Element.style.textTransform = 'uppercase';
h2Element.style.letterSpacing = '8px';

// get total-countries id using querySelector
const totalCountries = document.querySelector('#total-countries');
totalCountries.textContent = `Total Number of Countries: ${countries.length}`;
totalCountries.style.fontSize = '30px';
totalCountries.style.fontFamily = 'calibri';
totalCountries.style.margin = 'auto';

// get all h3 element using querySelector
const h3Element = document.querySelectorAll('h3');

h3Element.forEach((h3, index) => {
    h3.style.fontFamily = 'calibri';
    h3.style.fontSize = '16px';
    h3.style.fontWeight = 'normal';
    h3.style.margin = 'auto';
    if (index === 1) {
        h3.style.marginBottom = '50px'
    }
})

// get countries-wrapper class using querySelector
const countriesWrapper = document.querySelector('.countries-wrapper');
countriesWrapper.style.display = 'grid';
countriesWrapper.style.gridTemplateColumns = 'repeat(6, auto)'
countriesWrapper.style.width = '50%';
countriesWrapper.style.margin = 'auto';

// iterating through the countries data
let span
countries.forEach((country) => {
    span = document.createElement('span');
    span.style.boxShadow = '3px 3px 10px 3px #888888'
    span.style.width = '6em';
    span.style.height = '4em';
    span.style.fontSize = '15px';
    span.style.fontFamily = 'calibri';
    span.style.padding = '40% 10% 10%';
    span.style.textAlign = 'center';
    span.style.margin = '5%';
    span.textContent = country;
    countriesWrapper.appendChild(span);
})