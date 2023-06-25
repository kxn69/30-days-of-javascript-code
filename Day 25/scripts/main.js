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
    // graphWrapper.innerHTML = ''
    // graphTitle.innerHTML = '10 most spoken languages in the world';
    showLanguagesContent();
})

// Function to show population content
function showPopulationContent() {
    graphWrapper.innerHTML = '';

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
        progressBarFill.style.width = ((country.population / totalPopulation) * 150) + "%";

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
        populationAmount.textContent = country.population.toLocaleString();

        progressBar.appendChild(progressBarLabel);
        progressBarContainer.appendChild(progressBarFill)
        progressBar.appendChild(progressBarContainer);
        progressBar.appendChild(populationAmount)
        
        graphWrapper.appendChild(progressBar);

        isPopulationShown = true;
}) 
  }

// showLanguagesContent function
function showLanguagesContent() {
    graphWrapper.innerHTML = '';
    graphTitle.textContent = '10 most spoken languages in the world';

    const languageCount = {};
      
    // Count the number of countries speaking each language
    for (const country of countries_data) {
      const languages = country.languages;
  
      for (const language of languages) {
        if (languageCount.hasOwnProperty(language)) {
          languageCount[language]++;
        } else {
          languageCount[language] = 1;
        }
      }
    }
  
    // Sorting the languages by count in descending order
    const sortedLanguages = Object.entries(languageCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
  
          // calculate total languages
    const totalLanguages = sortedLanguages.reduce((acc, data) => {
        return acc + data[1];
    }, 0)

    // iterate through sortedLanguages
    sortedLanguages.forEach((language) => {
        const progressBar = document.createElement("div");
        progressBar.className = "progress-bar";
    
        // create progressBarContainer
        const progressBarContainer = document.createElement('div');
        progressBarContainer.className = 'progress-bar-container';

        // create progress bar fill
        const progressBarFill = document.createElement("div");
        progressBarFill.className = "progress-bar-fill";
        progressBarFill.style.width = (((language[1] / totalLanguages) * 200)) + "%";
    
        // create progressBar label
        const progressBarLabel = document.createElement("span");
        progressBarLabel.className = "progress-bar-label";
        progressBarLabel.textContent = language[0];

        // create population amount
        const populationAmount = document.createElement('span');
        populationAmount.className = 'population-amount';
        populationAmount.textContent = language[1];

        progressBar.appendChild(progressBarLabel);
        progressBarContainer.appendChild(progressBarFill)
        progressBar.appendChild(progressBarContainer);
        progressBar.appendChild(populationAmount)
        
        graphWrapper.appendChild(progressBar);

        isPopulationShown = true;
    })
}