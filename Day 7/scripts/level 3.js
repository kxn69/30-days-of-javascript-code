// Exercise: Level 3

// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser.
// It doesn’t take any parameter but it takes two inputs using prompt().
// One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

function userIdGenerator() {
    const numChars = prompt("Enter the number of characters:");
    const numIds = prompt("Enter the number of IDs to generate:");
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < numIds; i++) {
      for (let j = 0; j < numChars; j++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      result += '\n'; // Add a new line character between each ID
    }
    return result;
  }

console.log(userIdGenerator());


// 2. Write a function name rgbColorGenerator and it generates rgb colors.

function rgbColorGenerator() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

let rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
return rgbColor;
}
console.log(rgbColorGenerator());


// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors() {
    let hexChars = '0123456789abcdef';
    let hex = '';

for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * hexChars.length);
  hex += hexChars[randomIndex];
}

return `#${hex}`;
}

console.log(arrayOfHexaColors());


// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

function arrayOfRgbColors() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return [rgbColor]
}
console.log(arrayOfRgbColors());


// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

function convertHexaToRgb(hex) {
    // Remove the '#' character from the beginning of the hex string, if present
    hex = hex.replace('#', '');
  
    // Convert the hex string to decimal values for each color component
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    // Return the RGB color as a string
    return `rgb(${r}, ${g}, ${b})`;
  }
console.log(convertHexaToRgb('#ff0000'));


// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

function convertRgbToHexa(rgb) {
    // Extract the RGB color components from the string
    const [r, g, b] = rgb.match(/\d+/g);
  
    // Convert each component to a 2-digit hex string
    const hexR = parseInt(r).toString(16).padStart(2, '0');
    const hexG = parseInt(g).toString(16).padStart(2, '0');
    const hexB = parseInt(b).toString(16).padStart(2, '0');
  
    // Concatenate the hex strings to form the final hex color string
    const hexColor = `#${hexR}${hexG}${hexB}`;
  
    // Return the hex color string
    return hexColor;
  }
  console.log(convertRgbToHexa('rgb(255, 0, 0)'))

  
// 7. Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(type, count) {
    const colors = [];
  
    // Generate the specified number of colors
 for (let i = 0; i < count; i++) {
    // Generate a random color value
    const colorValue = Math.floor(Math.random() * 16777215); // 16777215 is the maximum value of a 24-bit color
  
      // Convert the color value to either hex or RGB format
    let color;
    if (type === 'hexa') {
    color = `#${colorValue.toString(16)}`;
    } else if (type === 'rgb') {
        const r = (colorValue >> 16) & 255;
        const g = (colorValue >> 8) & 255;
        const b = colorValue & 255;
        color = `rgb(${r}, ${g}, ${b})`;
      } else {
        return (`Invalid color type '${type}' specified.`);
      }
      // Add the color to the array
      colors.push(color);
    }
    // Return the array of colors, or a single color string if only one color was generated
    return count === 1 ? colors[0] : colors;
  }
console.log(generateColors('rgb', 1));


// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(array) {
    // Iterate over the array from the end to the beginning
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i (inclusive)
      const j = Math.floor(Math.random() * (i + 1));
  
      // Swap the values at positions i and j
      [array[i], array[j]] = [array[j], array[i]];
    }
  
    // Return the shuffled array
    return array;
  }
let arrayName = ['bormy', 'normy', 'corry', 'ronny']
console.log(shuffleArray(arrayName))


// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(num) {
    if (num === 0) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }

// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(value) {
    if (value === null || value === undefined) {
      return true;
    } else if (typeof value === "string" && value.trim().length === 0) {
      return true;
    } else if (Array.isArray(value) && value.length === 0) {
      return true;
    } else if (typeof value === "object" && Object.keys(value).length === 0) {
      return true;
    } else {
      return false;
    }
  }
console.log(isEmpty(' '))


// 11. Call your function sum, it takes any number of arguments and it returns the sum. 
function numberSums() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum;
}
console.log(numberSums(1,2,3,4));


// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items.
// Check if all the array items are number types. If not give return reasonable feedback.

const rtrt = [1, 2, 3, 4, 5]
function sumOfArrayItems(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'Error: All array items must be numbers';
        }
        sum += arr[i]
    }
    return sum;
}
console.log(sumOfArrayItems(rtrt));


// 13. Write a function called average, it takes an array parameter and returns the average of the items.
// Check if all the array items are number types. If not give return reasonable feedback.

function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            return 'All array items must be numbers';
        }
        sum += array[i];
        avr = sum / array.length;
    }
    return `average is ${avr}`;
}
console.log(average(rtrt));


// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array.
// If the array length is less than five it return 'item not found'.
const array2 = [1,2,3,4];

function modifyArray(arr) {
    if (arr.length < 5) {
      return 'item not found';
    } else {
      arr[4] = "modified";
      return arr;
    }
  }
console.log(modifyArray(array2))
// 15. Write a function called isPrime, which checks if a number is prime number.

function isPrime(num) {
    // 1 and any negative number are not prime
    if (num <= 1) {
      return false;
    }
  
    // 2 and 3 are prime
    if (num <= 3) {
      return true;
    }
  
    // Check if the number is divisible by 2 or 3
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
  
    // Check if the number is divisible by any odd number greater than 3 up to its square root
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
  
    // If the number passes all tests, it is prime
    return true;
  }
console.log(isPrime(11))


// 16. Write a functions which checks if all items are unique in the array.

function isUnique(arr) {
    let seen = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            return false;
        }
        seen.add(arr[i]);
    }
    return true;
}
const array1 = ['name', 1, 1, 2, 3];
console.log(isUnique(array1))

//  function isUnique(arr) {
//     let seen = new Set();
//     for (let item of arr) {
//       if (seen.has(item)) {
//         return false;
//       }
//       seen.add(item);
//     }
//     return true;
//   }


// 17. Write a function which checks if all the items of the array are the same data type.

function sameDataType(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (typeof arr[i] !== typeof arr[0]) {
        return false;
      }
    }
    return true;
  }


// 18. JavaScript variable name does not support special characters or symbols except $ or _.
// Write a function isValidVariable which check if a variable is valid or invalid variable.

function isValidVariable(str) {
    // Check if string starts with a letter, underscore or dollar sign
    if (/^[a-zA-Z$_]/.test(str)) {
      // Check if string contains only valid characters
      return /^[a-zA-Z0-9$_]*$/.test(str);
    }
    return false;
  }

// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

function generateRandomNumbers() {
    const numbers = [];
  
    while (numbers.length < 7) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
  
    return numbers;
  }
console.log(generateRandomNumbers());


// 20. Write a function called reverseCountries,
// it takes countries array and first it copy the array and returns the reverse of the original array

let newCountries = [].concat(countries);

function reverseCountries(countries) {
    const reversedCountries = [...newCountries].reverse();
    return reversedCountries;
  } 
console.log(reverseCountries())