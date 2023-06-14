// destructuring asabenehChallenges object
const { description, challengeTitle, challengeSubtitle, challengeYear, challenges } = asabenehChallenges2020;

// get body element using querySelector
const body = document.querySelector('body');
body.style.textAlign = 'center';

// get create h1 heading 
const h1Heading = document.createElement('h1');
h1Heading.innerHTML = `${description} in ${challengeYear}`;

// styled h1 element
h1Heading.style.fontFamily = 'calibri';
body.prepend(h1Heading)

// create h2 challengeSubtitle heading
const h2Heading = document.createElement('h2');
h2Heading.textContent = `${challengeSubtitle}`;

// styled h2 element
h2Heading.style.textDecoration = 'underline';
h2Heading.style.fontFamily = 'calibri';
h2Heading.style.fontWeight = 'normal';

// insert h2 heading after h1
h1Heading.insertAdjacentElement('afterend', h2Heading)

// create timeDate element
const timeDateElement = document.createElement('p');

// styled timeDate element
timeDateElement.style.display = 'inline-block';
timeDateElement.style.padding = '5px';
timeDateElement.style.fontFamily = 'monospace'
h2Heading.insertAdjacentElement('afterend', timeDateElement)

// get wrapper class
const wrapper = document.querySelector('.wrapper')

// style the wrapper container
wrapper.style.display = 'flex';
wrapper.style.flexWrap = 'wrap';
wrapper.style.border = '2px solid red';
wrapper.style.width = '50%';
wrapper.style.margin = '50px auto'

//
let span;
challenges.forEach((challenge) => {
span = document.createElement('span');
const { name, topics, status } = challenge;

// Create  span element for name
const nameSpan = document.createElement('span');
nameSpan.textContent = name;
nameSpan.style.padding = '20px';
nameSpan.style.fontWeight = 'bold';
nameSpan.style.fontFamily = 'calibri';

//   // Create  span elements for topics
const topicsSpan = document.createElement('span');
topicsSpan.textContent = '▼ Topics';
topicsSpan.onclick = dropDownFunction
topicsSpan.style.color = 'blue';
topicsSpan.style.cursor = 'pointer';
topicsSpan.style.textDecoration = 'underline';
topicsSpan.style.marginRight = '10px';


const topicsDropdown = document.createElement('span');
topicsDropdown.textContent = topics;
topicsDropdown.style.display = 'none';
// topicsDropdown.style.paddingLeft = '10px';

// create span element for status
const statusSpan = document.createElement('span');
statusSpan.textContent = status;
statusSpan.style.padding = '20px';
statusSpan.style.fontStyle = 'italic';
statusSpan.style.textAlign = 'right';
statusSpan.style.fontFamily = 'calibri';

// Append the separate <span> elements to the main <span> wrapper
span.appendChild(nameSpan);
span.appendChild(topicsSpan);
span.appendChild(topicsDropdown);
span.appendChild(statusSpan);

// style the span container
span.style.border = '2px solid blue';
span.style.width = '100%';
span.style.justifyContent = 'space-between';
span.style.display = 'flex';
span.style.alignItems = 'center';

wrapper.appendChild(span);
});



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
    h1Heading.innerHTML = h1Heading.innerHTML.replace(
      `${challengeYear}`,
      `<span style="color: ${randomColor}; font-size: 3rem; font-family: calibri;">
      2020
      </span>`
    );
  } 

updateColor();

// set interval
setInterval(updateColor, 1000);

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

// function to update date and time color
function updateDateColor() {
    const randomColor = getRandomColor();
    timeDateElement.style.backgroundColor = randomColor
}

// call the update Date Color function
updateDateColor();

// update color every second
setInterval(updateDateColor, 1000)

//
function dropDownFunction() {
    console.log('yes')
  }
