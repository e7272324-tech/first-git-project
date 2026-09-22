const prompt = require("prompt-sync")();
let disKilometres = parseFloat(prompt("Entrez la distance en kilometres :"));
console.log(disKilometres)
let disYards = disKilometres * 1093.61
console.log(disYards)