// Exercises Level 2

const student2 = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }

// 1. Stringify the students object with only firstName, lastName and skills properties

const stdObj = JSON.stringify(student2, ['firstName', 'lastName', 'skills'], 4)
console.log(stdObj)