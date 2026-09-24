function triABulles(tableau) {
    let n = tableau.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (tableau[j] > tableau[j + 1]) {
                // Échange des deux éléments
                let temp = tableau[j];
                tableau[j] = tableau[j + 1];
                tableau[j + 1] = temp;
            }
        }
    }
    return tableau;
}
let nombres = [64, 34, 25, 12, 22, 11, 90];
console.log("Avant le tri :", nombres);
triABulles(nombres);
console.log("Après le tri :", nombres);
