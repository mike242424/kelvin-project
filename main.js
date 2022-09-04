// The forecast today is 293 kelvin
const kelvin = 283;

// Converting Kelvin to Celsius
const celsius = kelvin - 273;

// Converting Celsius to Fahrenheit
// Using the .floor object to round down the Fahrenheit temperature
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

// Console log and string interpolation
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Converting Celsius to Newton
// Using the .floor object to round down the Newton temperature
const newton = Math.floor(celsius * (33 / 100));

// Console log and string interpolation
console.log(`The temperature is ${newton} degrees Newton.`);
