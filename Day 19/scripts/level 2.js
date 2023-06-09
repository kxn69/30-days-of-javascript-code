// Exercises: Level 2

// 1 . Create a closure which has three inner functions
const operations = () => {
    let add = (num1, num2) => {
        return num1 + num2
    }

    let subtract = (num1, num2) => {
        return num1 - num2
    } 

    let multiply = (num1, num2) => {
        return num1 * num2
    }

    return [add, subtract, multiply]
}

const calculator = operations()
console.log(calculator[0](4,3))
console.log(calculator[1](4,3))
console.log(calculator[2](4,3))
