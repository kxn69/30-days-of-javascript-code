// Get body element using querySelector
const bodyElement = document.querySelector('body')
bodyElement.style.textAlign = 'center'

// get h1 element using querySelector
const h1Element = document.querySelector('h1');
h1Element.style.fontFamily = '';
h1Element.style.fontSize = '40px';

// get h2 element using querySelector
const h2Element = document.querySelector('h2');
h2Element.style.fontFamily = 'courier';
h2Element.style.fontWeight = "normal";
h2Element.style.textDecoration = 'underline';

// get h3 element using querySelector
const h3Element = document.querySelector('h3')
h3Element.style.fontFamily = 'courier';
h3Element.style.fontWeight = "normal";
h3Element.style.textDecoration = 'underline';

// get wrapper class using querySelector
const wrapperElement = document.querySelector('.wrapper');
wrapperElement.style.display = 'flex';
wrapperElement.style.flexWrap = 'wrap';
wrapperElement.style.margin = '40px auto'
wrapperElement.style.maxWidth = '800px';
wrapperElement.style.justifyContent = 'center';

// generate numbers between 0 - 101
let span
for (let i = 0; i <= 101; i++) {
    span = document.createElement('span');
    span.style.fontSize = '24px';
    span.style.textAlign = 'center';
    span.style.fontFamily = 'sans-serif';
    span.style.width = '120px';
    span.style.margin = '4px';
    span.style.lineHeight = '60px';
    span.textContent = i;
    wrapperElement.appendChild(span);

// check if number is even
    if (i % 2 === 0) {
        span.style.backgroundColor = '#89cc74';
    }

// check if number is odd
    if (i % 2 !== 0) {
        span.style.backgroundColor = '#f5f11b'
    }

// check if number is prime
    let isPrime = true;
  
  if (i < 2) {
    isPrime = false;
  } else {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
  }
  
  // If the number is prime, log it to the console
  if (isPrime) {
    span.style.backgroundColor = '#f95454';
  }
}