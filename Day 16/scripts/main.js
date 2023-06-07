// Exercises Level 1

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

let age = 250;

let isMarried = true

const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}


// 1. Change skills array to JSON using JSON.stringify()

const jsonSkills = JSON.stringify(skills, undefined, 4)
console.log(jsonSkills)


// 2. Stringify the age variable

const stringifiedAge = JSON.stringify(age)
console.log(stringifiedAge)


// 3. Stringify the isMarried variable

const stringifiedMarried = JSON.stringify(isMarried)
console.log(stringifiedMarried)


// 4. Stringify the student object

const stringifiedStudentObject = JSON.stringify(student, undefined, 4)
console.log(stringifiedStudentObject)