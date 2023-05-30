// Exercise Level 2

// 1. Linear equation is calculated as follows: ax + by + c = 0.
// Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a, b, c, x) {
    return (-c - (a * x)) / b;
  }
  


// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0.
// Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadEquation(a, b, c) {
    const discriminant = (b * b) - (4 * a * c);
  
    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [root1, root2];
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return [root];
    } else {
      return [];
    }
  }

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

const printArray = arr => {
    for (element of arr) {
        console.log(element)
    }
}
const numbers = [1,2,3,4,5]
printArray(numbers)


// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

const showDateTime = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDay();
    let hour = now.getHours();
    let minute = now.getMinutes();
    hour = hour <= 9 ? '0' + hour : hour;
    minute = minute <= 9 ? '0' + minute : minute;
    month = month <= 9 ? '0' + month : month;
    day = day <= 9 ? '0' + day : day
    return `${month}/${day}/${year} ${hour}:${minute}`
}

console.log(showDateTime());


// 5. Declare a function name swapValues. This function swaps value of x to y.

const swapValues = (x, y) => {
    let temp = x;
    x = y;
    y = temp;
    return [x, y];
}
console.log(swapValues(3,4));

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
const array = [2, 3, 4, 5, 6];

const reverseArray = arr => {
    const reversedArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        const valueAtIndex = arr[i];
        reversedArray.push(valueAtIndex)
    }
    return reversedArray;
}

console.log(reverseArray(array))


// 7. Declare a function name capitalizeArray.
// It takes array as a parameter and it returns the - capitalizedArray.

const names = ['randy', 'dondy', 'mondy', 'sondy'];

function capitalizedArray (arr) {
    const capitalized = [];

    for (let i = 0; i < arr.length; i++) {
        let capital = arr[i].toUpperCase();
        capitalized.push(capital);
    }
    return capitalized;
}
console.log(capitalizedArray(names));


// 8. Declare a function name addItem.
// It takes an item parameter and it returns an array after adding the item

const addItem = (item) => {
    const returnedArray = [];

    returnedArray.push(item)
    return returnedArray;
}
console.log(addItem('corn'))


// 9. Declare a function name removeItem.
// It takes an index parameter and it returns an array after removing an item

const removeItem = (array, index) => {
    array.splice(index, 1);

    return array;
}

console.log(removeItem(names, 1));


// 10. Declare a function name sumOfNumbers.
// It takes a number parameter and it adds all the numbers in that range.

const sumOfNumbers = (...num) => {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
}
console.log(sumOfNumbers(3, 3, 4));


// 11. Declare a function name sumOfOdds.
// It takes a number parameter and it adds all the odd numbers in that - range.

const sumOfOdds = (...num) => {
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 1) {
          sum += num[i];
        }
      }
      return sum;
}
console.log(sumOfOdds(1, 2, 3, 4, 5, 6, 7))


// 12. Declare a function name sumOfEven.
// It takes a number parameter and it adds all the even numbers in that - range.

const sumOfEven = (...num) => {
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
          sum += num[i];
        }
      }
      return sum;
}
console.log(sumOfEven(1, 2, 3, 4, 5, 6, 7))


// 13. Declare a function name evensAndOdds .
// It takes a positive integer as parameter and it counts number of evens and odds in the number.

const evensAndOdds = (...num) => {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
      }
    console.log(`The number of evens are ${evenCount}.`)
    console.log(`The number of odds are ${oddCount}.`)
}
evensAndOdds(1, 2, 3, 4, 5, 6, 7);


// 14. Write a function which takes any number of arguments and return the sum of the arguments

function sumOfArgs() {
    let total = 0;

    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sumOfArgs(1,2,3));


// 15. Write a function which generates a randomUserIp.

function generateRandomIP() {
    const num1 = Math.floor(Math.random() * 256);
    const num2 = Math.floor(Math.random() * 256);
    const num3 = Math.floor(Math.random() * 256);
    const num4 = Math.floor(Math.random() * 256);
    return `${num1}.${num2}.${num3}.${num4}`;
  }
console.log(generateRandomIP());


// 16. Write a function which generates a randomMacAddress

function generateRandomMAC() {
    let mac = '';
    for (let i = 0; i < 6; i++) {
      const hex = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
      mac += (i > 0 ? ':' : '') + hex;
    }
    return mac.toUpperCase();
  }
  console.log(generateRandomMAC())


  // 17. Declare a function name randomHexaNumberGenerator.
  // When this function is called it generates a random hexadecimal number.
  // The function return the hexadecimal number.

function randomHexaNumberGenerator() {
    let hex = '';
    for (let i = 0; i < 6; i++) {
      const randomDigit = Math.floor(Math.random() * 16);
      const digitHex = randomDigit.toString(16);
      hex += digitHex;
    }
    return hex;
}
console.log(randomHexaNumberGenerator());


// 18. Declare a function name userIdGenerator.
// When this function is called it generates seven character id. The function return the id.

function userIdGenerator() {
    let id = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = characters.length;
    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * length);
      id += characters.charAt(randomIndex);
    }
    return id;
  }
  console.log(userIdGenerator());