// Exercises: Level 2

// 1. Print out all the cat names in to catNames variable.

const catsAPI = 'https://api.thecatapi.com/v1/breeds'

const getCatNames = async () => {
    try {
        const fetchCats = await fetch(catsAPI)
        const catNames = await fetchCats.json()

        catNames.forEach(cat => {
            const { name } = cat
            console.log('Cat Name: ', name)
        });
        
    } catch (err) {
        console.log(err)
    }
}
getCatNames()
