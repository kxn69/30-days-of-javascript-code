// get body element using
const body = document.querySelector('body');
// style body element
body.style.textAlign = 'center';
body.style.backgroundImage = 'url("images/galaxy.gif")';
body.style.fontFamily = 'Montserrat';

// get header tag
const header = document.querySelector('header');
// style header
// header.style.border = '2px solid red';
header.style.padding = '10px';

// get h1 element
const h1Heading = document.querySelector('h1');
// style h1 element
h1Heading.style.color = 'white';
h1Heading.style.fontSize = '36px';
h1Heading.style.textShadow = '2px 1px #cae7ef'
h1Heading.style.letterSpacing = '4px';
h1Heading.style.marginBottom = '40px';

// get input element
const input = document.querySelector('input');
// style input element
input.style.padding = '8px';
input.style.width = '200px';

// get select element
const select = document.querySelector('select');
// style select element
select.style.padding = '8px';
select.style.width = '150px';

// select all options
const options = document.querySelectorAll('option');
// iterate through and change backgroundColor
options.forEach((option, index) => {
    option.style.backgroundColor = '#dbdbdb';
    if (index !== 0) {
        option.style.fontWeight = 'bold';
    }
})

// get button element
const button = document.querySelector('button')
// style button element
button.style.padding = '9px';
button.style.color = 'white';
button.style.border = 'none';
button.style.backgroundColor = 'rgba(143, 160, 164, 0.7)';
button.style.cursor = 'pointer';

// get flex-container class
const flexContainer = document.querySelector('.flex-container');
//style
flexContainer.style.backgroundColor = 'rgba(143, 160, 164, 0.2)';
flexContainer.style.width = '1000px';
flexContainer.style.margin = 'auto';
flexContainer.style.display = 'flex';
flexContainer.style.alignItems = 'center';

// get flex-item image class
const flexItemImage = document.querySelector('.flex-item.image');
// style
flexItemImage.style.width = '1000px';

// get flex item description class
const flexItemDescription = document.querySelector('.flex-item.description');
// style
flexItemDescription.style.color = 'white';
flexItemDescription.style.fontSize = '20px';
flexItemDescription.style.margin = 'auto';
flexItemDescription.style.backgroundColor = 'rgba(143, 160, 164, 0.2)';
flexItemDescription.style.width = '444px';
flexItemDescription.style.display = 'none';

// create description element
const description = document.createElement('p');

// create p element
const weight = document.createElement('p');
// style
weight.style.width = '100px';
weight.style.lineHeight = '100px';
weight.style.backgroundColor = 'rgba(143, 160, 164, 0.5)';
weight.style.display = 'inline-block';
weight.style.borderRadius = '50px'; 

// get planetImage image
const planetImage = document.querySelector('.planet-image');
// style image
planetImage.style.width = '300px';
planetImage.style.height = '300px';
planetImage.style.padding = '40px';

// add event listener
button.addEventListener('click', event => {
    const inputValue = parseFloat(input.value);
    const selectedOption = select.value;
    const selectedPlanet = select.value.toUpperCase();
    
    flexItemDescription.style.display = 'block';

    // if input has no value
    if (input.value === "") {
        flexContainer.innerHTML = '';
        flexContainer.style.padding = '40px';
        flexContainer.style.marginLeft = '200px';

        // create text
        const text = document.createElement('p');
        text.textContent = 'Mass is required';

        // style text
        text.style.color = 'white';
        text.style.fontSize = '24px';
        text.style.padding = '20px';
        text.style.width = '500px';
        text.style.margin = 'auto';
        text.style.backgroundColor = 'rgba(143, 160, 164, 0.2)';
        flexContainer.appendChild(text);
    }

    // if inputValue is present and no option is selected
    if (!isNaN(inputValue) && selectedOption === 'none') {
        flexContainer.innerHTML = '';
        flexContainer.style.padding = '40px';

         // create text
         const text = document.createElement('p');
         text.textContent = 'You did not choose a planet yet';
 
         // style text
         text.style.color = 'white';
         text.style.fontSize = '24px';
         text.style.padding = '20px';
         text.style.width = '500px';
         text.style.margin = 'auto';
         text.style.backgroundColor = 'rgba(143, 160, 164, 0.2)';
         flexContainer.appendChild(text);
    }

    // 
    if (!isNaN(inputValue) && selectedOption) {
        switch (selectedOption) {
            case 'mercury':
                result = (inputValue * 3.7).toFixed(2);
                flexContainer.innerHTML = '';
                flexItemImage.style.width = '';

                // planet source
                planetImage.src = "./images/mercury.png";

                // description innerHTML
                description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

                // weight innerHTML
                weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;

                //append planetImage to flexItemImage && description and weight to flexItemDescription
                flexItemImage.appendChild(planetImage);
                flexItemDescription.appendChild(description);
                flexItemDescription.appendChild(weight);
                flexContainer.appendChild(flexItemImage);
                flexContainer.appendChild(flexItemDescription)
            break;
            case 'venus':
                result = (inputValue * 8.87).toFixed(2);
                flexContainer.innerHTML = '';
                flexItemImage.style.width = '';

                // planet source
                planetImage.src = "./images/venus.png";

                // description innerHTML
                description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

                // weight innerHTML
                weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;            

                //append venusImage to flexItemImage && description and weight to flexItemDescription
                flexItemImage.appendChild(planetImage);
                flexItemDescription.appendChild(description);
                flexItemDescription.appendChild(weight);
                flexContainer.appendChild(flexItemImage);
                flexContainer.appendChild(flexItemDescription);
              break;
              case 'earth':
                result = (inputValue * 9.8).toFixed(2);
                flexContainer.innerHTML = '';
                flexItemImage.style.width = '';

                // planet source
                planetImage.src = "./images/earth.png";

                // description innerHTML
                description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

                // weight innerHTML
                weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;
          
                //append planetImage to flexItemImage && description and weight to flexItemDescription
                flexItemImage.appendChild(planetImage);
                flexItemDescription.appendChild(description);
                flexItemDescription.appendChild(weight);
                flexContainer.appendChild(flexItemImage);
                flexContainer.appendChild(flexItemDescription);
              break;
              case 'mars':
                result = (inputValue * 3.71).toFixed(2);
                flexContainer.innerHTML = '';
                flexItemImage.style.width = '';

                // planet source
                planetImage.src = "./images/mars.png";

                // description innerHTML
                description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

                // weight innerHTML
                weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;
          
                //append planetImage to flexItemImage && description and weight to flexItemDescription
                flexItemImage.appendChild(planetImage);
                flexItemDescription.appendChild(description);
                flexItemDescription.appendChild(weight);
                flexContainer.appendChild(flexItemImage);
                flexContainer.appendChild(flexItemDescription);
              break;
              case 'moon':
                result = (inputValue * 1.62).toFixed(2);
                flexContainer.innerHTML = '';
                flexItemImage.style.width = '';

                // planet source
                planetImage.src = "./images/moon.png";

                // description innerHTML
                description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

                // weight innerHTML
                weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;                

                //append moonImage to flexItemImage && description and weight to flexItemDescription
                flexItemImage.appendChild(planetImage);
                flexItemDescription.appendChild(description);
                flexItemDescription.appendChild(weight);
                flexContainer.appendChild(flexItemImage);
                flexContainer.appendChild(flexItemDescription);
              break;
              case 'jupiter':
                result = (inputValue * 24.79).toFixed(2);
                flexContainer.innerHTML = '';
                flexItemImage.style.width = '';

                // planet source
                planetImage.src = "./images/jupiter.png";

                // description innerHTML
                description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

                // weight innerHTML
                weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;                

                //append jupiterImage to flexItemImage && description and weight to flexItemDescription
                flexItemImage.appendChild(planetImage);
                flexItemDescription.appendChild(description);
                flexItemDescription.appendChild(weight);
                flexContainer.appendChild(flexItemImage);
                flexContainer.appendChild(flexItemDescription);
              break;
              case 'saturn':
                result = (inputValue * 10.44).toFixed(2);
                flexContainer.innerHTML = '';
                flexItemImage.style.width = '';

                // planet source
                planetImage.src = "./images/saturn.png";

                // description innerHTML
                description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

                // weight innerHTML
                weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;                

                //append saturnImage to flexItemImage && description and weight to flexItemDescription
                flexItemImage.appendChild(planetImage);
                flexItemDescription.appendChild(description);
                flexItemDescription.appendChild(weight);
                flexContainer.appendChild(flexItemImage);
                flexContainer.appendChild(flexItemDescription);
              break;
              case 'uranus':
                result = (inputValue * 8.87).toFixed(2);
                flexContainer.innerHTML = '';
                flexItemImage.style.width = '';

                // planet source
                planetImage.src = "./images/uranus.png";

                // description innerHTML
                description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

                // weight innerHTML
                weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;                

                //append uranusImage to flexItemImage && description and weight to flexItemDescription
                flexItemImage.appendChild(planetImage);
                flexItemDescription.appendChild(description);
                flexItemDescription.appendChild(weight);
                flexContainer.appendChild(flexItemImage);
                flexContainer.appendChild(flexItemDescription)
              break;
              case 'neptune':
                result = (inputValue * 11.15).toFixed(2);
                flexContainer.innerHTML = '';
                flexItemImage.style.width = '';

                // const neptuneImage = document.createElement('img');
                planetImage.src = "./images/neptune.png";

                // description innerHTML
                description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

                // weight innerHTML
                weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;                

                //append planetImage to flexItemImage && description and weight to flexItemDescription
                flexItemImage.appendChild(planetImage);
                flexItemDescription.appendChild(description);
                flexItemDescription.appendChild(weight);
                flexContainer.appendChild(flexItemImage);
                flexContainer.appendChild(flexItemDescription);
              break;
              case 'pluto':
                result = (inputValue * 0.62).toFixed(2);
                flexContainer.innerHTML = '';
                flexItemImage.style.width = '';

                // planet source
                planetImage.src = "./images/pluto.png";

                // description innerHTML
                description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

                // weight innerHTML
                weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;                

                //append planetImage to flexItemImage && description and weight to flexItemDescription
                flexItemImage.appendChild(planetImage);
                flexItemDescription.appendChild(description);
                flexItemDescription.appendChild(weight);
                flexContainer.appendChild(flexItemImage);
                flexContainer.appendChild(flexItemDescription);
              break;
        }
      }
       
})