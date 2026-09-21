const prompt = require("prompt-sync");
let x = [ 45, 69, 33,89, 80];
let max = x[0]
for (let i = 0; i < x.length; i++) {
if (x[i] < max){ max = x[i]
}
}
console.log(max)