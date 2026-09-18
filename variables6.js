const prompt = require("prompt-sync")();
let a = parseFloat (prompt("Entrer les nombre a:"));
let b = parseFloat (prompt("Entrer les nombre b:"));
let o = prompt("Entrer o (+ , - , * ,/)")
if (o=='+'){
    console.log(a+b)
}else if (o=="-"){
    console.log(a-b)
}else if (o=="*"){
console.log(a*b)
}else if (o=="/"){
console.log(a/b)}
