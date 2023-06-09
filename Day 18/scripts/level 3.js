// Exercises: Level 3

// 1. Read the cats api and find the average weight of cat in metric unit.

const getAverageWeight = async () => {
    try {
        const fetchCats = await fetch(catsAPI)
        const cats = await fetchCats.json()

        let totalWeight = 0;
        let catCount = 0;

       cats.forEach(cat => {
        const { weight } = cat

        const [minWeight, maxWeight] = weight.metric.split(' - ');

        const minWeightNum = parseFloat(minWeight);
        const maxWeightNum = parseFloat(maxWeight);
        
        const averageWeight = (minWeightNum + maxWeightNum) / 2;
        
        totalWeight += averageWeight
        catCount++
       });
        
       const averageWeight = totalWeight / catCount
       console.log('Average Weight:', averageWeight.toFixed(2), 'kg')
    } catch (err) {
        console.log(err)
    }
}
getAverageWeight()


// 2. Read the countries api and find out the 10 largest countries

const getLargestCountries = async () => {
    try {
        const response = await fetch(countriesAPI)
        const countries = await response.json()

        const sortedCountries = countries.sort((a, b) => b.area - a.area)
        
        const largestCountries = sortedCountries.slice(0, 10)
        
        largestCountries.forEach(country => {
            console.log('Country:', country.name)
            console.log('Area:', country.area)
            console.log('----------------------')
        });

    } catch (err) {
        console.error(err)
    }
}
getLargestCountries()


// 3. Read the countries api and count total number of languages in the world used as officials.

async function totalOfficialLanguages() {
    try {
        const response = await fetch(countriesAPI)
        const countries = await response.json()

        const languagesSet = new Set()

        countries.forEach(country => {
            const { languages } = country
            
            languages.forEach(language => {
                if (language.name === 'English' || 
                language.name === 'Chinese' || 
                language.name === 'Arabic' || 
                language.name === 'French' || 
                language.name === 'Russian' || 
                language.name === 'Spanish' ) {
                    languagesSet.add(language.name);
                  }
            })
        })
        
        const totalLanguages = languagesSet.size;
        console.log('Total Number of Official Languages:', totalLanguages);
    } catch (err) {
        console.log(err)
    }
}
totalOfficialLanguages()