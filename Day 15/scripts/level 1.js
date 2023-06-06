// Exercises Level 1

// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    sit() {
        console.log(`${this.name} is sitting`)
    }

    play() {
        console.log(`${this.name} is playing`)
    }
}

// 2. Create a Dog and Cat child class from the Animal Class.
const dog = new Animal('Luffy', 5, 'brown', 4)
console.log(dog)
dog.sit()

const cat = new Animal('Ham', 4, 'white', 4)
console.log(cat)
cat.play()

