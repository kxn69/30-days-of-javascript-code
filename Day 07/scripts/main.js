// Exercise Level 1

// 1. Declare a function fullName and it print out your full name.

function myFullName() {
    const firstName = 'Ariyo';
    const lastName = 'Matthew';
    return `${firstName} ${lastName}`;
}
console.log(myFullName());

// 2. Declare a function fullName and now it takes firstName, 
// lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
    return `Your full name is: ${firstName} ${lastName}`
}
console.log(fullName('Ariyo', 'Matthew'));

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.

const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(2, 3));

// 4. An area of a rectangle is calculated as follows: area = length x width. 
// Write a function which calculates areaOfRectangle.

const areaOfRectangle = (length, width) => length * width
console.log(areaOfRectangle(4, 15));

// 5. A perimeter of a rectangle is calculated as follows:
//  perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

const perimeterOfRectangle = (length, width) => {
    let perimeter = 2 * (length + width);
    return `The perimeter is ${perimeter}`;
}
console.log(perimeterOfRectangle(4, 6))


// 6. A volume of a rectangular prism is calculated as follows:
//  volume = length x width x height. Write a function which calculates volumeOfRectPrism.

const volumeOfRectPrism = (length, width, height) => length * width * height;
console.log(volumeOfRectPrism(2, 3, 4));


// 7. Area of a circle is calculated as follows: area = π x r x r.
//  Write a function which calculates areaOfCircle

function areaOfCircle(r) {
    const area = Math.PI * r * r
    return area;
}
console.log(areaOfCircle(10))

// 8. Circumference of a circle is calculated as follows:
//  circumference = 2πr. Write a function which calculates circumOfCircle

const circumOfCircle = (r) => 2 * Math.PI * r;
console.log(circumOfCircle(10));


// 9. Density of a substance is calculated as follows:density= mass/volume.
//  Write a function which calculates density.

const density = (mass, volume) => {
    const density = mass * volume;
    return `${density} kg/m3`
}
    
console.log(density(2, 10))

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.
// Write a function which calculates a speed of a moving object, speed.

const speed = (distance, time) => {
    const speed = distance / time;
    return `${speed} m/s`
}
console.log(speed(5, 10))


// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

const weight = (mass, gravity = 9.81) => mass * gravity;
console.log(weight(10))

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
//  Write a function which convert oC to oF convertCelsiusToFahrenheit.

const convertCelsiusToFahrenheit = (oC) => {
    const oF = (oC * 9/5) + 32
    return `${oF} °F`;
}
console.log(convertCelsiusToFahrenheit(10))

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
//  Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
//Check if a person is underweight, normal, overweight or obese based the information given below.

const bmi = (weight, height) => {
    const bmi = weight / (height * height);
    
    if (bmi < 18.5) {
        console.log(`Your BMI is ${bmi}, You are Underweight`)
    } else if (bmi >=18.5 && bmi <= 24.9) {
        console.log(`Your BMI is ${bmi}, You have Normal weight`)
    } else if (bmi >= 25 && bmi <= 24.9) {
        console.log(`Your BMI is ${bmi}, You are Overweight`)
    } else if (bmi >= 30) {
        console.log(`Your BMI is ${bmi}, You are Obese`)
    }
    
    // return result;
}

bmi(2440, 8)

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason = (month = 'January') => {
    if (month === 'March' || month === 'April' || month === 'May') {
        return 'Spring';

    } else if (month === 'September' || month === 'October' || month === 'November') {
        return 'Autumn';

    } else if (month === 'December' || month === 'January' || month === 'Febuary') {
        return 'Winter';
    }
}
console.log(checkSeason())

// 15. Math.max returns its largest argument. 
// Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

const findMax = (num1, num2, num3) => {
    let max = num1;

    if (num2 > num1) {
        max = num2;
    }
    if (num3 > num2) {
        max = num3;
    }
    return max
}

console.log(findMax(1, 5, 3));