// Exercise: Level 1

// 1. Create an index.html file and put four p elements as above: 
// Get the first paragraph by using document.querySelector(tagname) and tag name

const firstParagraph = document.querySelector('p')
console.log(firstParagraph)


// 2. Get each of the the paragraph using document.querySelector('#id') and by their id

const p1 = document.getElementById('p1')
console.log(p1)

const p2 = document.getElementById('p2')
console.log(p2)

const p3 = document.getElementById('p3')
console.log(p3)

const p4 = document.getElementById('p4')
console.log(p4)


// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

const allParagraph = document.querySelectorAll('p')
console.log(allParagraph)


// 4. Loop through the nodeList and get the text content of each paragraph

for (const list of allParagraph) {
    console.log(list)
}


// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph

allParagraph[3].textContent = 'Fourth Paragraph'


// 6. Set id and class attribute for all the paragraphs using different attribute setting methods

allParagraph[0].className = 'paragraph'
allParagraph[0].id = 'first-paragraph'

allParagraph[1].className = 'paragraph'
allParagraph[1].id = 'second-paragraph'

allParagraph[2].className = 'paragraph'
allParagraph[2].id = 'third-paragraph'

allParagraph[3].className = 'paragraph'
allParagraph[3].id = 'forth-paragraph'