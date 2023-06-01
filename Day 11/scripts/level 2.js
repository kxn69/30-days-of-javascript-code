// Exercises: Level 2

// 1. Iterate through the users array and get all the keys of the object using destructuring

for (user of users) {
    Object.keys(user)
}


// 2. Find the persons who have less than two skills

for (user of users) {
    let skills = user.skills

    if (skills.length < 2) {
        console.log(user)
    }
}

for ( const { name, scores, skills, age} of users) {
    if (skills.length < 2) {
        console.log('name:', name)
    }
}