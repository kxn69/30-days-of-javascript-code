// Exercise: Level 3

// 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population


// Sort countries by name
const countriesByName = countries.sort((a, b) => a.name.localeCompare(b.name));

console.log('Countries sorted by name:');
console.log(countriesByName);

// Sort countries by capital
const countriesByCapital = countries.sort((a, b) => a.capital.localeCompare(b.capital));

console.log('Countries sorted by capital:');
console.log(countriesByCapital);

// Sort countries by population
const countriesByPopulation = countries.sort((a, b) => a.population - b.population);

console.log('Countries sorted by population:');
console.log(countriesByPopulation);


// 2.  Find the 10 most spoken languages:
function mostSpokenLanguages(countries) {
    const languageCount = {};
  
    // Count the number of countries speaking each language
    for (const country of countries) {
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
  
    // Format the result in the desired output format
    const result = sortedLanguages.map(([language, count]) => ({
      country: language,
      count: count
    }));
  
    return result;
  }
  
  console.log(mostSpokenLanguages(countries));


// 3. Use countries_data.js file create a function which create the ten most populated countries

function mostPopulatedCountries(countries) {
    // Sort the countries array based on population in descending order
    const sortedPopulation = countries.sort((a, b) => b.population - a.population);
  
    // Slice the sorted array to get the top `count` countries
    const topCountries = sortedPopulation.slice(0, 10);
  
    // Create a new array with country names and populations only
    const result = topCountries.map(country => {
      return {
        country: country.name,
        population: country.population
      };
    });
  
    return result;
  }
console.log(mostPopulatedCountries(countries, 10))


// 4. Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode)
// and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max,
// count, percentile, and frequency distribution of the sample. You can create an object called statistics and create
// all the functions which do statistical calculations as method for the statistics object. Check the output below.

const data = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics {
    constructor(data) {
      this.data = data;
    }
  
    count() {
      return this.data.length;
    }
  
    sum() {
      return this.data.reduce((total, value) => total + value, 0);
    }
  
    min() {
      return Math.min(...this.data);
    }
  
    max() {
      return Math.max(...this.data);
    }
  
    range() {
      return this.max() - this.min();
    }
  
    mean() {
      return this.sum() / this.count();
    }
  
    median() {
      const sortedData = this.data.sort((a, b) => a - b);
      const middle = Math.floor(this.count() / 2);
  
      if (this.count() % 2 === 0) {
        return (sortedData[middle - 1] + sortedData[middle]) / 2;
      } else {
        return sortedData[middle];
      }
    }
  
    mode() {
      const counts = new Map();
      let maxCount = 0;
      let mode = [];
  
      for (const value of this.data) {
        let count = counts.get(value) || 0;
        count++;
        counts.set(value, count);
  
        if (count > maxCount) {
          maxCount = count;
          mode = [value]
        } else if (count === maxCount) {
          mode.push(value);
        }
      }
  
      return { mode: mode, count: maxCount };
    }
  
    var() {
      const mean = this.mean();
      const squaredDifferences = this.data.map((value) => (value - mean) ** 2);
      return this.sum(squaredDifferences) / (this.count() - 1);
    }
  
    std() {
      return Math.sqrt(this.var());
    }
  
    freqDist() {
      const counts = new Map();
  
      for (const value of this.data) {
        let count = counts.get(value) ||   0;
        count++;
        counts.set(value, count);
      }
  
      return Array.from(counts.entries());
    }
  }
  
const statistics = new Statistics(data);
  
console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
console.log('Range: ', statistics.range());
console.log('Mean: ', statistics.mean());
console.log('Median: ',statistics.median());
console.log('Mode: ', statistics.mode());
console.log('Variance: ', statistics.var()); 