const prompt = require("prompt-sync")();
const chaine = prompt("Entrer une chaine:");
let resv = ""
for (let i = chaine.length-1 ; i >= 0 ; i--) {
    // console.log(chaine[i])
    resv+=chaine[i]
}
console.log(resv)