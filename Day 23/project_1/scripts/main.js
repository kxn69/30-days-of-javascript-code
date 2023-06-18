// Project 1

// select body element using querySelector
const bodyElement = document.querySelector('body')

// style bodyElement
bodyElement.style.textAlign = 'center';
bodyElement.style.fontFamily = 'calibri';

// get h1Element using querySelector
const h1Element = document.querySelector('h1');
h1Element.style.color = '#65be25';

// get h2 and h3 elements using querySelector
const h2Element = document.querySelector('h2');
const h3Element = document.querySelector('h3');

// style h2 and h3 element
h2Element.style.fontWeight = 'normal';
h3Element.style.fontWeight = 'normal';

// get wrapper class 
const wrapperClass = document.querySelector('.wrapper');

// create errorDiv div
const errorDiv = document.createElement('div');
errorDiv.classList.add('errorContainer');
const errorContainer = document.getElementById('errorContainer');


// create form element
const formELement = document.createElement('form');

// create inputElement
const inputElement = document.createElement('input');
inputElement.type = 'text';
inputElement.placeholder = 'Generate more numbers...';

// style inputELement
inputElement.style.borderColor = '#65be25';
inputElement.style.width = '500px';
inputElement.style.padding = '9px';
inputElement.style.marginRight = '20px';

// create generateNumbers button
const generateNumbersBtn = document.createElement('input');
generateNumbersBtn.type = 'submit';
generateNumbersBtn.value = 'Generate numbers';

// style generateNumbers button
generateNumbersBtn.style.padding = '11px';
generateNumbersBtn.style.backgroundColor = '#65be25';
generateNumbersBtn.style.border = 'none';
generateNumbersBtn.style.color = 'white';

//
formELement.appendChild(errorDiv);
formELement.appendChild(inputElement);
formELement.appendChild(generateNumbersBtn);

// create numbersDiv div
const numbersDiv = document.createElement('div');

// style numbersDiv
numbersDiv.style.display = 'flex';
numbersDiv.style.flexWrap = 'wrap';
numbersDiv.style.margin = '40px auto'
numbersDiv.style.width = '70%';
numbersDiv.style.justifyContent = 'center';

// Event listener for form submission
formELement.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const amount = inputElement.value;
    if (isNaN(amount)) {
    displayError('Input value must be a number');
    formELement.reset();
  } else if (amount <= 0) {
    displayError('Enter number value on the input field to generate numbers');
    formELement.reset();
  } else {
    clearError(); 
    generateNumbers(amount);
    formELement.reset();
  }
  });

// append formElement and numbersDiv to wrapperClass
wrapperClass.appendChild(formELement);
wrapperClass.appendChild(numbersDiv);

// Function to display the error message
function displayError(message) {
  errorDiv.innerHTML = '';
  
  // Create error message element
  const errorElement = document.createElement('p');
  errorElement.style.color = 'red';
  errorElement.textContent = message;
  errorElement.style.textAlign = 'left';
  errorElement.style.margin = 'auto';
  errorElement.style.marginLeft = '420px';

  // Insert error message into the error container
  errorDiv.appendChild(errorElement);
  }

// Function to clear error message
function clearError() {
    errorDiv.innerHTML = '';
}


// generateNumbers function
function generateNumbers(amount) {
    numbersDiv.innerHTML = '';
  
    for (let i = 0; i < amount; i++) {
      const span = document.createElement('span');
      span.style.fontSize = '24px';
      span.style.textAlign = 'center';
      span.style.fontFamily = 'sans-serif';
      span.style.width = '110px';
      span.style.margin = '4px';
      span.style.lineHeight = '40px';
      span.textContent = i;
  
      // Check if the number is even
      if (i % 2 === 0) {
        span.style.backgroundColor = '#89cc74';
      }
  
      // Check if the number is odd
      if (i % 2 !== 0) {
        span.style.backgroundColor = '#f5f11b';
      }
  
      // Check if the number is prime
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
  
      // If the number is prime, style it accordingly
      if (isPrime) {
        span.style.backgroundColor = '#f95454';
      }
  
      numbersDiv.appendChild(span);
    }
  }  

generateNumbers(50);