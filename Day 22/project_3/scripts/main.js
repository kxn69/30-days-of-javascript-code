// destructuring asabenehChallenges object
const { description, 
  challengeTitle, 
  challengeSubtitle, 
  challengeYear, 
  challenges,
  author,
 } = asabenehChallenges2020;

// get body element using querySelector
const body = document.querySelector('body');
body.style.textAlign = 'center';
body.style.fontFamily = 'calibri';

// get create h1 heading 
const h1Heading = document.createElement('h1');
h1Heading.innerHTML = `${description} in ${challengeYear}`;

// styled h1 element
// h1Heading.style.fontFamily = 'calibri';
body.prepend(h1Heading)

// create h2 challengeSubtitle heading
const h2Heading = document.createElement('h2');
h2Heading.textContent = `${challengeSubtitle}`;

// styled h2 element
h2Heading.style.textDecoration = 'underline';
// h2Heading.style.fontFamily = 'calibri';
h2Heading.style.fontWeight = 'normal';

// insert h2 heading after h1
h1Heading.insertAdjacentElement('afterend', h2Heading)

// create timeDate element
const timeDateElement = document.createElement('p');

// styled timeDate element
timeDateElement.style.display = 'inline-block';
timeDateElement.style.padding = '5px';
timeDateElement.style.fontFamily = 'monospace'
h2Heading.insertAdjacentElement('afterend', timeDateElement)

// get wrapper class
const wrapper = document.querySelector('.wrapper')

// style the wrapper container
wrapper.style.display = 'flex';
wrapper.style.flexWrap = 'wrap';
wrapper.style.width = '50%';
wrapper.style.margin = '50px auto'

//  iterating through challenges to get name, topics and status
let span;
challenges.forEach((challenge, index) => {
  span = document.createElement('span');
  const { name, topics, status } = challenge;

// Create separate <span> elements for name, topics, and status
const nameSpan = document.createElement('span');
nameSpan.textContent = name;
nameSpan.style.padding = '20px';
nameSpan.style.fontFamily = 'calibri';

// create span element for topic
const topicsDiv = document.createElement('div');
topicsDiv.style.display = 'inline-block'; 
topicsDiv.style.position = 'relative';

//crate p element 
const topicsSpan = document.createElement('p');
topicsSpan.style.cursor = 'pointer';
const topicNames = name.slice(10)
topicsSpan.textContent = `▶ ${topicNames}`;

// create span element for topicsDropdown
const topicsDropdown = document.createElement('span');

topicsDropdown.textContent = topics.join(' ')
topicsDropdown.style.display = 'none';

// eventListener for topics drop down
let isDropdownOpen = true;
topicsSpan.addEventListener('click', () => {
if (isDropdownOpen) {
  topicsSpan.textContent = `▼ ${topicNames}`;
} else {
  topicsSpan.textContent = `▶ ${topicNames}`;
}

isDropdownOpen = !isDropdownOpen;

topicsDropdown.style.display = topicsDropdown.style.display === 'none' ? 'block' : 'none';
topicsDropdown.style.maxWidth = '70px';
});

// create span element for status
const statusSpan = document.createElement('span');
statusSpan.textContent = status;
statusSpan.style.padding = '20px';
statusSpan.style.textAlign = 'right';
statusSpan.style.fontFamily = 'calibri';

// Append to topicsDiv
topicsDiv.appendChild(topicsSpan);
topicsDiv.appendChild(topicsDropdown);

// Append the separate <span> elements to the main <span> wrapper
span.appendChild(nameSpan);
span.appendChild(topicsDiv);
span.appendChild(statusSpan);

// Styling the main span container
span.style.width = '100%';
span.style.marginBottom = '10px'; 
span.style.display = 'flex';
span.style.justifyContent = 'space-between';
span.style.margin = '1px auto';
span.style.alignItems = 'center';

if (index === 0) {
  span.style.backgroundColor = '#51cb65';
} else if (index === 1) {
  span.style.backgroundColor = '#f4ea50';
} else {
  span.style.backgroundColor = '#dc5748';
}

wrapper.appendChild(span);
});

// create the tutor info div
const tutorInfoDiv = document.createElement('div');
const tutorInfoClass = tutorInfoDiv.classList.add('tutor-info');
// destructure the author object
const { firstName, lastName, titles, qualifications, socialLinks, skills} = author;

const nameHeading = document.createElement('h3')
nameHeading.textContent = `${firstName} ${lastName}`;
nameHeading.style.fontSize = '24px';

// Create a div to contain the social icons
const socialIconsDiv = document.createElement('div');
socialIconsDiv.style.display = 'flex';
socialIconsDiv.style.gap = '20px';
socialIconsDiv.style.justifyContent = 'center'
// Iterate over the social links and create an icon for each

socialLinks.forEach((link) => {
const socialLink = document.createElement('a');
socialLink.href = link.url;

const icon = document.createElement('i');
icon.innerHTML = link.fontawesomeIcon;
icon.style.color = 'black';
icon.style.fontSize = '32px'

socialLink.appendChild(icon);

socialIconsDiv.appendChild(socialLink);
});

// insert tutorInfoDiv after wrapper element
wrapper.insertAdjacentElement('afterend', tutorInfoDiv);

// create tutor bio
const tutorBio = document.createElement('p');
tutorBio.innerHTML = author.bio;
tutorBio.style.margin = '40px auto';
tutorBio.style.width = '42%';

// create a div element for titles, qualifications and  skills
const mainTitleSkillsDiv = document.createElement('div');
mainTitleSkillsDiv.classList.add('title-skills');
mainTitleSkillsDiv.style.display = 'flex';
mainTitleSkillsDiv.style.textAlign = 'left';
mainTitleSkillsDiv.style.width = '48%';
mainTitleSkillsDiv.style.margin = 'auto';
mainTitleSkillsDiv.style.justifyContent = 'space-evenly';

//  create titleDiv
const titleDiv = document.createElement('div');

// create titleText
const titleText = document.createElement('h4');
titleText.textContent = 'Titles';
titleText.style.margin = 'auto';

titleDiv.appendChild(titleText);

// iterate through titles to remove ,
let titlesArray = []
titles.forEach((title) => {
  titlesArray.push(`${title[0]} ${title[1]}`)
})

//
let titleList;
titlesArray.forEach((title) => {
  titleList = document.createElement('span');
  titleList.textContent = title;
  titleDiv.appendChild(titleList);
  titleList.style.display = 'block';
})

// create skills div
const skillsDiv = document.createElement('div');

// create skillsText
const skillsText = document.createElement('h4');
skillsText.textContent = 'Skills';
skillsText.style.margin = 'auto';
skillsDiv.appendChild(skillsText);

// create skills list

skills.forEach((skill) => {
  const skillsList = document.createElement('span');
  skillsList.textContent = '✅' + skill;
  skillsList.style.display = 'block';

  skillsDiv.appendChild(skillsList);
})

// create qualifications div
const qualificationsDiv = document.createElement('div');

// create qualificationsText
const qualificationsText = document.createElement('h4');
qualificationsText.textContent = 'Qualifications';
qualificationsText.style.margin = 'auto';

qualificationsDiv.appendChild(qualificationsText);

// create qualifications list
qualifications.forEach((qualification, index) => {
  const span = document.createElement('span');
  span.innerHTML = span.innerHTML = (index === 0) ? '📖' + qualification : '👨‍🎓' + qualification;
  ;
  span.style.display = 'block';

  qualificationsDiv.appendChild(span);
})

// append the titleDiv, skillsDiv and qualificationsDiv to main titleSkill div
mainTitleSkillsDiv.appendChild(titleDiv);
mainTitleSkillsDiv.appendChild(skillsDiv);
mainTitleSkillsDiv.appendChild(qualificationsDiv);

// append the name heading and social icons and bio to tutor info div
tutorInfoDiv.appendChild(nameHeading);
tutorInfoDiv.appendChild(socialIconsDiv);
tutorInfoDiv.appendChild(tutorBio);
tutorInfoDiv.appendChild(mainTitleSkillsDiv)

// FUNCTIONS

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// Function to update the color of "2020" with a random color
function updateColor() {
    const randomColor = getRandomColor();
    h1Heading.innerHTML = h1Heading.innerHTML.replace(
      `${challengeYear}`,
      `<span style="color: ${randomColor}; font-size: 3rem; font-family: calibri;">
      2020
      </span>`
    );
  } 

updateColor();

// set interval
setInterval(updateColor, 1000);

// FUnction to update date and time
function updateTime() {
    const currentTime = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', dat: 'numeric' };
    const currentDate = currentTime.toLocaleDateString('en-US', options);
    const currentTimeString = currentTime.toLocaleTimeString('en-US')
    timeDateElement.textContent = `${currentDate} ${currentTimeString}`
}

// call the updateTime function
updateTime()

// update time every second
setInterval(updateTime, 1000);

// function to update date and time color
function updateDateColor() {
    const randomColor = getRandomColor();
    timeDateElement.style.backgroundColor = randomColor
}

// call the update Date Color function
updateDateColor();

// update color every second
setInterval(updateDateColor, 1000)

//

