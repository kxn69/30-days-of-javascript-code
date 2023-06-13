// Exercise: Level 3

// 1. Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
//The year color is changing every 1 second
//The date and time background color is changing every on seconds
//Completed challenge has background green
//Ongoing challenge has background yellow

// get wrapper class using querySelector
const wrapElement = document.querySelector('.wrapper');

// align all wrapper class element to center 
wrapElement.style.textAlign = 'center';

// get h1 element using  querySelector
const h1Element = document.querySelector('h1');

// Get the innerHTML of the h1 element
const h1Text = h1Element.innerHTML;

// Split the text by spaces to separate individual words
const words = h1Text.split(' ');

// Create a new array to store the modified words
const modifiedWords = [];

// Loop through the words and apply font size, style, and family to "2020" and the rest of the text
words.forEach((word) => {
    if (word === '2020') {
      modifiedWords.push(`<span style="font-size: 2rem; font-family: 'Arial', sans-serif">${word}</span>`);
    } else {
      modifiedWords.push(`<span style="font-size: 1.5rem; font-weight: bold; font-family: 'Helvetica', sans-serif">${word}</span>`);
    }
  });

  // Join the modified words back together
const modifiedText = modifiedWords.join(' ');
h1Element.innerHTML = modifiedText;


// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to update the color of "2020" with a random color
function updateColor() {
  const randomColor = getRandomColor();
  h1Element.innerHTML = h1Element.innerHTML.replace(
    '2020',
    `<span style="color: ${randomColor}; font-size: 3rem; font-family: monospace;">
    2020
    </span>`
  );
}

// Initial call to update the color
updateColor();

// Set an interval to update the color every second
setInterval(updateColor, 1000);

// get ul element using querySelector
const ulElement = document.querySelector('ul');
ulElement.style.listStyleType = 'none';

// get h2 element using  querySelector
const h2Element = document.querySelector('h2');

// added styles to h2 element
h2Element.style.textDecoration = 'underline';
h2Element.style.fontSize = '1rem';
h2Element.style.fontWeight = 'normal';
h2Element.style.fontFamily = 'monospace';

// Create a new <p> element for the time and date
const timeDateElement = document.createElement('p');

// FUnction to update date and time
function updateTime() {
    const currentTime = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', dat: 'numeric' };
    const currentDate = currentTime.toLocaleDateString('en-US', options);
    const currentTimeString = currentTime.toLocaleTimeString('en-US')
    timeDateElement.textContent = `${currentDate} ${currentTimeString}`
}

// call the updateTime function
updateTime()

// update time every second
setInterval(updateTime, 1000);

// Insert the time and date element between the <h2> and <ul> elements
h2Element.insertAdjacentElement('afterend', timeDateElement);

// adding border to timeDate element
// timeDateElement.style.border = '4px solid black';
timeDateElement.style.display = 'inline-block';

// function to update date and time color
function updateDateColor() {
    const randomColor = getRandomColor();
    timeDateElement.style.backgroundColor = randomColor
}

// call the update Date Color function
updateDateColor();

// update color every second
setInterval(updateDateColor, 1000)

// get list class using querySelector
const lists = document.querySelectorAll('.lists')
console.log(lists)

// iterating through list class
lists.forEach((list, i) => {
    list.style.fontFamily = 'monospace';
    list.style.display = 'flex';
    // list.style.alignItems = 'center'
    list.style.maxWidth = '40rem'
    list.style.padding = '0.8rem';
    list.style.margin = '2px auto'

    // list.style.border = '2px solid blue';
        if (i === 0) {
            lists[i].style.backgroundColor = '#6acc31';
     } else if (i === 1) {
        lists[i].style.backgroundColor = 'yellow';
     } else {
        list.style.backgroundColor = '#eb4263';
     }
     
})
