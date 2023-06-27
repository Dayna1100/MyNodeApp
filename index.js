// let message = "Hello World";
// console.log(message);

// Load lodash using require() as assign it to a variable named lodash (easy to remember, right?)
let lodash = require("lodash");

let name = "brittany";
console.log("Name: " + name);

// call the upperFirst() function in lodash to convert the first letter of the string to uppercase
name = lodash.startCase(name);
console.log("Revised name: " + name);