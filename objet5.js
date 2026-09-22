const prompt = require("prompt-sync")();
const infosLivre = { 
    titre : "",
    auteur : "",
    année : 0,
}

function infoLivre(titre,auteur,année){
    return {titre,auteur,année}
}
console.log(infoLivre("dbagh", "tom", 2026))

 