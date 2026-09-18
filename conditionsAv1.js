const prompt = require("prompt-sync")();
let revenu = parseFloat(prompt("Quel est votre revenu anuuel ?"));
let score = parseFloat(prompt("Quel est votre score de credit (sur = 1000) ?"));
let duree = parseFloat(prompt("Quel est durée de prét (en annèes) ?"))
if (revenu >= 30000 && score >= 700 && duree <=10){
    console.log("statut : Egiligible");
} else if (revenu >= 30000 && score >= 650 && duree <= 15) {
    console.log("statut : Eligable avec conditions");
} else {
console.log("statut : Non égligable")};