const prompt = require("prompt-sync")();
let vitKilometres = parseFloat(prompt("Entrer la vitesse en kilometres par heure km/h :"))
console.log(vitKilometres)
let vitMetres = vitKilometres*1233
console.log(vitMetres)
