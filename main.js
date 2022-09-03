// The forecast today is 293 kelvin
const kelvin = 283;
// Converting Kelvin to Celsius
const celsius = kelvin - 273;
// Converting Celsius to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// Using the .floor object to round down the Fahrenheit temperature
fahrenheit = Math.floor(celsius * (9 / 5) + 32);
// Console log and string interpolation
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Converting Celsius to Newton
let newton = celsius * (33 / 100);
newton = Math.floor(celsius * (33 / 100));
// Console log and string interpolation
console.log(`The temperature is ${newton} degrees Newton.`);
