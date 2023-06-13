// Exercise: Level 2

// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, 
// and the second and the fourth paragraph a red color

allParagraph.forEach((paragraph, index) => {
    if (index % 2 === 0) {
        paragraph.style.fontSize = '48px'
        paragraph.style.color = 'green'
        paragraph.style.backgroundColor = 'white'
        paragraph.style.border = 'solid red 4px'
        paragraph.style.borderRadius = '20px'
        paragraph.style.textAlign = 'center'
        
    } else {
        paragraph.style.fontSize = '24px'
        paragraph.style.color = 'red'
        paragraph.style.backgroundColor = 'white'
        paragraph.style.border = 'solid green 4px'
        paragraph.style.borderRadius = '20px'
        paragraph.style.textAlign = 'center'
    }
})


// 3. Set text content, id and class to each paragraph

allParagraph[0].className = 'pg'
allParagraph[0].id = 'first-pg'
allParagraph[0].textContent = 'Helloooooooo World!!!!'

allParagraph[1].className = 'pg'
allParagraph[1].id = 'second-pg'
allParagraph[1].textContent = 'First day of implementing DOM'

allParagraph[2].className = 'pg'
allParagraph[2].id = 'third-pg'
allParagraph[2].textContent = 'Getting the hang of it!!!'

allParagraph[3].className = 'pg'
allParagraph[3].id = 'forth-pg'
allParagraph[3].textContent = '👨‍💻👨‍💻👨‍💻👨‍💻'