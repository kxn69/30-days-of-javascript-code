// get background class
const backgroundDiv = document.querySelector('.background');

const displays = document.querySelectorAll('.display');

const firstDisplay = document.querySelector('.first');
const secondDisplay = document.querySelector('.second');


let sentence = '30 days of JavaScript challenge 2020 asabeneh yetayeh';
const fonts = ['aldrich', 'lato', 'montserrat', 'nunito', 'oswald'];

function displayWords() {
    displays.forEach((display, index) => {
        setInterval(() => {
            const animatedWord = document.createElement('span');
            
            if (index === 0) {
                const words = sentence.split('');

                words.forEach((word, index) => {
                  const wordSpan = document.createElement('span');
                  wordSpan.textContent = word;
                  wordSpan.style.color = getRandomColor(); // Apply random color

                 if (index === 21 || index === 36) {
                    const br = document.createElement('br');
                    animatedWord.appendChild(br);
                  }

                  animatedWord.appendChild(wordSpan);
                });

                firstDisplay.innerHTML = '';
                secondDisplay.innerHTML = '';
                firstDisplay.appendChild(animatedWord);
                backgroundDiv.appendChild(firstDisplay);

            } else if (index === 1) {
                const animatedWord = document.createElement('span');
                const words = sentence.split('');

                words.forEach((word, index) => {
                  const wordSpan = document.createElement('span');
                  wordSpan.textContent = word;
                  wordSpan.style.color = getRandomColor(); // Apply random color

                  if (index === 10 || index === 21 || index === 31) {
                    const br = document.createElement('br');
                    animatedWord.appendChild(br);
                  }
                    
                  animatedWord.appendChild(wordSpan);
                });
           
                firstDisplay.innerHTML = '';
                secondDisplay.innerHTML = '';
                secondDisplay.appendChild(animatedWord);
                backgroundDiv.appendChild(secondDisplay);
            }
            
            // Apply random font family
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            firstDisplay.style.fontFamily = randomFont;
            secondDisplay.style.fontFamily = randomFont;

            index = (index + 1) % displays.length; 
        }, 3000)
    })
}
displayWords();

function updateColor() {
    // const background = document.querySelector('background');
    const randomColor = getRandomColor();
    backgroundDiv.style.backgroundColor = randomColor;

}
updateColor()
setInterval(updateColor, 3000)

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

getRandomColor();
