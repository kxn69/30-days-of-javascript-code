// Exercise Level 3

// 1. How many languages are there in the countries object file.
const languages = []

for (const country of countries) {
languages.push(country.languages)
}
const flattenLanguages = languages.flat()

const languageSet = new Set(flattenLanguages)
console.log(`no of languages is: ${languageSet.size}`)


// 2.  Use the countries data to find the 10 most spoken languages:

function mostSpokenLanguages(countries, limit) {
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
      .slice(0, limit);
  
    // Format the result in the desired output format
    const result = sortedLanguages.map(([language, count]) => ({
      country: language,
      count: count
    }));
  
    return result;
  }
  
  console.log(mostSpokenLanguages(countries, 10));








