const leia = require('readline-sync');

let n1;
let n2;
let n3;
let n4;
let diferenca;

n1 = leia.questionFloat('Digite o Número 1: ');
n2 = leia.questionFloat('Digite o Número 2: ');
n3 = leia.questionFloat('Digite o Número 3: ');
n4 = leia.questionFloat('Digite o Número 4: ');

    diferenca = (n1 * n2) - (n3 * n4)

console.log("\nA Diferença é: " + diferenca.toFixed(1));
console.log("\n")