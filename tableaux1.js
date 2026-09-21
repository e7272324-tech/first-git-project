const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter the number of elements : "));
const array = [];
let sum = 0
for (let i = 0; i < num; i++) {
    const number = parseInt(prompt("Enter a number: "));
    array.push(number);}
console.log("The array is: [" + array,"]");
for (let i = 0; i < array.length; i++) {
    sum += array[i]; }

console.log(sum);