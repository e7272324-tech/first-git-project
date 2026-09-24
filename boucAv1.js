const prompt = require("prompt-sync")();
let n = parseInt(prompt("Entrer le nombre de la table souhaitéé :"));
let affichage = "";
for (let i = 10; i >= 1; i--){
    let resultant =  n * i;
    affichage += `${n} x ${i} = ${resultant}\n`;

}
console.log(affichage);