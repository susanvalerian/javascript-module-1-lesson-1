/**
 * gr[simea din corp
 */

let weight = `88,3`;
let height = `1.75`;

const weightAsNumber = Number.parseFloat(weight.replace(",", "."));
const heightAsNumber = Number.parseFloat(height);

const bmi = weightAsNumber / Math.pow(heightAsNumber, 2);
const mesage = `BMI pentru cineva cu inaltimea de ${heightAsNumber} si greutatea de ${weightAsNumber} este ${bmi}`;
console.log(mesage);
