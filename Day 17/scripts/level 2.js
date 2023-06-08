// Exercises: Level 2

// 1. Create a student object. The student object will have first name, last name, age, skills, country, 
// enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    firstName: 'Habibi',
    lastName: 'Habibiz',
    age: 100,
    skills: ['spending', 'buying', 'shopping'],
    country: 'Dubai'
}

const studentJson = JSON.stringify(student)

localStorage.setItem('student', studentJson)
console.log(localStorage)