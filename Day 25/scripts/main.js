// get subtitle class
const subtitle = document.querySelector('.subtitle');
subtitle.textContent = `Currently, we have ${countries_data.length} countries`;

// get populationButton and languagesButton class
const populationButton = document.querySelector('.population');
const languagesButton = document.querySelector('.languages');

// get graph-wrapper class
const graphWrapper = document.querySelector('.graph-wrapper');

// get graph-title class
const graphTitle = document.querySelector('.graph-title');

// destructure countries_data
const { name, languages, population } = countries_data;


let isPopulationShown = true;

// Function to show population content
function showPopulationContent() {
    graphWrapper.innerHTML = '';

    // graphTitle.innerHTML = '10 most populated countries in the world';

    graphTitle.textContent = '10 most populated countries in the world';

    // world population
    const worldPopulation = countries_data.reduce((acc, data) => {
        return acc + data.population
    }, 0)


    // sort population from highest to lowest
    const sortedPopulation = countries_data.sort((a, b) => b.population - a.population);

    // Slice the sorted array to get the top 10 countries
    const topCountries = sortedPopulation.slice(0, 10);

    // worldObject
    const worldObject = { name: 'World', population: worldPopulation };
    // adding world to topCountries population
    topCountries.unshift(worldObject);

    const totalPopulation = topCountries.reduce((acc, data) => {
        return acc + data.population;
    }, 0)

    topCountries.forEach((country, index) => {
        const progressBar = document.createElement("div");
        progressBar.className = "progress-bar";

    
    // create progressBarContainer
    const progressBarContainer = document.createElement('div');
    progressBarContainer.className = 'progress-bar-container';

    // create progress bar fill
    const progressBarFill = document.createElement("div");
    progressBarFill.className = "progress-bar-fill";
    progressBarFill.style.width = 0; // initial width
    progressBarFill.style.width = ((country.population / totalPopulation) * 100) + "%";

    // create progressBar label
    const progressBarLabel = document.createElement("span");
    progressBarLabel.className = "progress-bar-label";
    if (index === 3) {
        progressBarLabel.textContent = 'USA'
    } else {
        progressBarLabel.textContent = country.name;
    }

    // create population amount
    const populationAmount = document.createElement('span');
    populationAmount.className = 'population-amount';
    populationAmount.textContent = country.population;

    progressBar.appendChild(progressBarLabel);
    progressBarContainer.appendChild(progressBarFill)
    progressBar.appendChild(progressBarContainer);
    progressBar.appendChild(populationAmount)
    
    graphWrapper.appendChild(progressBar);

    isPopulationShown = true;
})
    
  }
// call showPopulationContent
showPopulationContent();
// add event listener for populationButton button
populationButton.addEventListener('click', event => {
    if (isPopulationShown) {
        showPopulationContent();
      }
})


// add event listener for languagesButton button
languagesButton.addEventListener('click', event => {
    graphWrapper.innerHTML = ''
    // graphTitle.innerHTML = '10 most spoken languages in the world';

    
})
