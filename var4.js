const prompt = require("prompt-sync")();
let C = parseFloat(prompt("Entrer la temperature en Celsuis"))
let ètat_de_leau="vide";
if (C < 0) {
ètat_de_leau = "Solide";
}else if (0 <= C && C < 100 ) {
ètat_de_leau = "Liquide";
}else {
ètat_de_leau = "Gaz";}
console.log("l`ètat de l`eau est : " ,ètat_de_leau)