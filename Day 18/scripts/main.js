// Exercises: Level 1

// 1. Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.com/v2/all'

// const getCountriesData = async () => {
//     try {
//         const response = await fetch(countriesAPI)
//         const countries = await response.json()
//         countries.forEach(country => {
//             const { name, capital, languages, population, area } = country
//             console.log('Country:', name);
//             console.log('Capital:', capital);
//             console.log('Languages:', languages.map(lang => lang.name).join(', '));
//             console.log('Population:', population);
//             console.log('Area:', area);
//             console.log('=======================')
//         });
//     } catch (err) {
//         console.error(err)
//     }
// }
// getCountriesData()
