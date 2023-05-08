// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
// Exercise: Level 1

// 1. Create an empty object called dog
const dog = {};

// 2. Print the the dog object on the console 
console.log(dog);

// 3. Add name, legs, color, age and bark properties for the dog object.
// The bark property is a method which return woof woof

dog.name = 'Lucy';
dog.legs = 4;
dog.color = 'brown';
dog.age = 8;
dog.bark = function() {
    return 'woof woof'
}

// 4. Get name, legs, color, age and bark value from the dog object

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark);


// 5. Set new properties the dog object: breed, getDogInfo

dog.breed = 'poodle';
dog.getDogInfo = function() {
    let statement = `The dog's name is ${this.name}, he's a ${this.breed} and also ${this.age} years old.`
    return statement;
}
console.log(dog);
console.log(dog.getDogInfo);