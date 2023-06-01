// Exercises: Level 3

// 1. Destructure the countries object print name, capital, population and languages of all countries

for ( { countryName, capital, population, languages } of countries) {
    console.log('Name:', countryName)
    console.log('Capital:', capital)
    console.log('Population:', population)
    console.log('Languages:', languages)
}

// 2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. 
// Destructure the following array name to name, skills array to skills, scores array to scores, 
// JavaScript score to jsScore and React score to reactScore variable in one line.

const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

const [ name, skills, [,,jsScore, reactScore]] = student
console.log(name, skills, jsScore, reactScore)


// 3. Write a function called convertArrayToObject which can convert the array to a structure object.

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]


const convertedArray = [];
function convertArrayToObject(students) {
    
  
    for (const student of students) {
      const [name, skills, scores] = student;
  
      const studentObj = {
        name,
        skills,
        scores
      };
 
      convertedArray.push(studentObj);
    }
  
    return convertedArray;
  }
  
const convertedStudents = convertArrayToObject(students);
console.log(convertedStudents);


// 4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?

const student2 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

  const newStudent = {
    ...student2, 
    skills: {
        ...student2.skills, 
        frontEnd: [
            ...student2.skills.frontEnd, 
            {skill: 'Bootstrap', level: 8}
        ], 
        backEnd: [
            ...student2.skills.backEnd, 
            {skill: 'Express', level: 9}
        ], 
        dataBase: [
            ...student2.skills.dataBase,
            {skill: 'SQL', level: 8}
        ],
        dataScience: [
            ...student2.skills.dataScience, 'SQL'
        ]
    }
  }
console.log(newStudent)