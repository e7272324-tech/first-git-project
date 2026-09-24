const prompt = require("prompt-sync")();
let n = parseInt(prompt("Entrer un entier positif pour la factorielle :"));
let factorielle = 1;
for (let i = 1; i<= n; i++) {
    factorielle *= i;
}
console.log(`${n}! = ${factorielle}`);