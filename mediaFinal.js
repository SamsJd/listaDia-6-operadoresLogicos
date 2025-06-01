const leia = require('readline-sync');

let nota1;
let nota2;
let nota3;
let nota4;
let mediaFinal;

nota1 = leia.questionFloat('Digite a Primeira nota: ');
nota2 = leia.questionFloat('Digite a Segunda nota: ');
nota3 = leia.questionFloat('Digite a Terceira nota: ');
nota4 = leia.questionFloat('Digite a Quarta nota: ');

    mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("\nA Média Final é: " + mediaFinal.toFixed(1));
console.log("\n")