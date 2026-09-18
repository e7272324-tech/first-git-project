const prompt = require("prompt-sync")();
let lettre = prompt("Entrer une lettre :")
switch (lettre){
case 'A':
case 'a':
case 'I':
case 'i':
case 'E':
case 'e':
    console.log(`la lettre "${lettre} est une voyelle.`);
    break;
default:
    console.log(`La lettre "${lettre}" est une consonne (ou un autre caractère).`);
}