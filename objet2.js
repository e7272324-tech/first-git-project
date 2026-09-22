const prompt = require("prompt-sync")();
let etudiant = {
    nom: "adam",
    prenom: "adam",
    notes: [14, 16, 12, 18, 15]
};
console.log("Etudiant : "+ etudiant.prenom, etudiant.nom);
console.log("Liste des notes : "+ etudiant.notes.join(", "));
let somme = 0;
for (let note of etudiant.notes){
    somme += note;
}
let moyenne = somme / etudiant.notes.lenght;
console.log("moyenne:"+ moyenne);