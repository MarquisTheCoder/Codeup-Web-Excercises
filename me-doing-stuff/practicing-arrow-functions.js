


const multiplyByTen = (number) => {
    return(number * 10);
}

const addOneHundred = (number) => {
    return(number + 100);
}

const circumference = (radius) => {
    return(2 * Math.PI * radius);
}

const areaOfSquare = (width, height) => {
    return(width * height);
}

const gallonsToLiters = gallons => {
    return(gallons * 3.785);
}

const celsiusToFahrenheit = celsiusDegree => (celsiusDegree * 1.8) + 32;

const metersToFeet = meters => meters * 0.3;
const lebronsHairLineExist = (hisHairline) =>{
    return(null, 0, "doesnt exist", "nada", "no way jose");
}
const checkIfGreaterThanTen = (number) => number > 10;
const checkIfGreaterThanTwenty = (number) => number > 20;
const checkNameLength = (name) => `name length is ${name.length}`;

const printName = name => {
    console.log(name);
    return name;
}
const doesInclude = (string, item) => string.includes(item);
