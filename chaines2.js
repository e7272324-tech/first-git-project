const prompt = require("prompt-sync")();
let texte = prompt("Entrer une chaine:");
let compteur = 0;
for (let caractere of texte) {
    compteur++;
}
console.log("la longeur de texte est de compteur caractères :",compteur);