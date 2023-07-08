// get background class
const backgroundDiv = document.querySelector('.background');
const sentenceDiv = document.querySelector('.sentence');

const fonts = ['Aldrich', 'Lato', 'Montserrat', 'Nunito', 'Oswald', 'Raleway Dots', 'Raleway', 'Roboto'];
let sentence = '30 days of JavaScript challenge 2020 asabeneh yetayeh';

let firstAnimatedWord = document.createElement('span');
let secondAnimatedWord = document.createElement('span');

// function to display first random
function firstRandomDisplay() {
  firstAnimatedWord.classList.add('display');
  const words = sentence.split('');

  words.forEach((word, index) => {
    const wordSpan = document.createElement('span');
    wordSpan.textContent = word;
    wordSpan.style.color = getRandomColor(); // Apply random color

   if (index === 21 || index === 36) {
      const br = document.createElement('br');
      firstAnimatedWord.appendChild(br);
    }

    firstAnimatedWord.appendChild(wordSpan);
  });
}

firstRandomDisplay();

// function to display second random
function secondRandomDisplay() {
  secondAnimatedWord.classList.add('display');
  const words = sentence.split('');

  words.forEach((word, index) => {
    const wordSpan = document.createElement('span');
    wordSpan.textContent = word;
    wordSpan.style.color = getRandomColor(); // Apply random color

    if (index === 10 || index === 21 || index === 31) {
      const br = document.createElement('br');
      secondAnimatedWord.appendChild(br);
    }
    
    secondAnimatedWord.appendChild(wordSpan);
  });
}

secondRandomDisplay();

// function to display sentence at random
function displayAtRandom() {
  const animatedWords = [firstAnimatedWord, secondAnimatedWord];
  
  let randomDisplay = animatedWords[Math.floor(Math.random() * animatedWords.length)];
  randomDisplay.classList.add('sentence-animation');
  sentenceDiv.innerHTML = '';
  sentenceDiv.appendChild(randomDisplay);
}

displayAtRandom();
setInterval(displayAtRandom, 4000);

// function to add random font
function addRandomFont() {
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  firstAnimatedWord.style.fontFamily = randomFont;
  secondAnimatedWord.style.fontFamily = randomFont;
}

addRandomFont();
setInterval(addRandomFont, 4000);

// function to update color
function updateColor() {
    const randomColor = getRandomColor();
    backgroundDiv.style.backgroundColor = randomColor;
}
updateColor()
setInterval(updateColor, 4000)

// Function to generate a random color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

getRandomColor();