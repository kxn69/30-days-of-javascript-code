// Exercises Level 2

// 1. Override the method you create in Animal class

class Dog extends Animal {
    constructor(name, age, color, legs, gender) {
        super(name, age, color, legs)
        this.gender = gender
    }

    getDogInfo() {
        let pronoun = this.gender == 'Male' ? 'He' : 'She'
        let info = `${this.name} is ${this.age}. ${pronoun} has a ${this.color} skin and ${this.legs} legs.`
        return info
    }
}

const sharon = new Dog(
    'Sharon',
    6,
    'white',
    4,
    'white'
)

console.log(sharon)
console.log(sharon.getDogInfo())