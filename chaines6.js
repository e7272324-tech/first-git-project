const prompt = require("prompt-sync")();
const chaine = prompt("Entrer une chainen");
const car = prompt("Entrer un caractere")
let num = 0
for (i = 0; i < chaine.length; i++){
    if (car === chaine[i]){
        num++
    }
    // console.log(incl)
}
console.log(num)