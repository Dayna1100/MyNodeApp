// let message = "Hello World";
// console.log(message);

// Load lodash using require() as assign it to a variable named lodash (easy to remember, right?)
// let lodash = require("lodash");

// let name = "brittany";
// console.log("Name: " + name);

// // call the upperFirst() function in lodash to convert the first letter of the string to uppercase
// name = lodash.startCase(name);
// console.log("Revised name: " + name);

// const { writeFile } = require("node:fs/promises");

// // import {writeFile} from ("node:fs/promises");  <- old way to write without fs
// const message = "Hello, world!"

// writeFile("./message-archive.txt", message, {
//     flag: "a",
// })

// console.log ("Message written")

const { readFile, writeFile } = require("node:fs/promises");
const { camelCase } = require("lodash")
const readMessage = require("./read-message") 


const message = "Hello world"

writeFile("message-archive.txt", camelCase(message))