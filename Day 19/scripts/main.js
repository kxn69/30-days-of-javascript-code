// Exercises: Level 1

// 1. Create a closure which has one inner function

function helloWorld() {
    let sayHello = 'Helloooo World!!!'

    function sayHelloWorld() {
        console.log(sayHello)
    }
    return sayHelloWorld
}

const sayHello = helloWorld()
sayHello()