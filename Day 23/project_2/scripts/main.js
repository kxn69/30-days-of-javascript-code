// get body element
const body = document.querySelector('body');

body.style.fontFamily = 'calibri';
body.style.textAlign = 'center';

// create div element
const divElement = document.createElement('div');
divElement.style.display = 'flex';
divElement.style.alignItems = 'center';
divElement.style.justifyContent = 'center';
divElement.style.margin = 'auto';
divElement.style.height = '700px';
divElement.style.position = 'relative';
divElement.style.flexDirection = 'column';

// create input element
const inputElement = document.createElement('h1');
inputElement.textContent = 'Press any keyboard key';

inputElement.style.textAlign = 'center';
inputElement.style.width = '500px';
inputElement.style.padding = '20px';
inputElement.style.fontSize = '45px';
inputElement.style.textShadow = '2px 1px #888888';
inputElement.style.boxShadow = '2px 2px 10px 2px #888888';

// create keyCodeNumber
const keyCodeNumber = document.createElement('h2');

// eventListener for keyboard press
document.addEventListener('keydown', event => {
    const key = event.key;

    if (key === ' ') {
        inputElement.innerHTML = `You pressed <span style="color: #66d26b">space</span>`;
        getCharCode(key);
    } else {
        inputElement.innerHTML = `You pressed <span style="color: #66d26b">${key}</span>`;
        getCharCode(key);
    }
})


body.appendChild(divElement);
divElement.appendChild(inputElement);

function getCharCode(key) {
    keyCodeNumber.innerHTML = '';

    keyCodeNumber.textContent = key.charCodeAt(0); 
    
    keyCodeNumber.style.fontSize = '60px'
    keyCodeNumber.style.lineHeight = '120px'
    keyCodeNumber.style.padding = '20px';
    keyCodeNumber.style.color = '#66d26b';
    keyCodeNumber.style.textShadow = '2px 1px #888888';
    keyCodeNumber.style.boxShadow = '2px 2px 5px 2px #888888';
    

    divElement.appendChild(keyCodeNumber);
}