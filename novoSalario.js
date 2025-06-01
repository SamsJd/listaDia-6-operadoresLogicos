const leia = require('readline-sync');

let salario;
let abono;
let novoSalario;

salario = leia.questionFloat('Digite o Salário: ');
abono = leia.questionFloat('Digite o Abono: ');

    novoSalario = salario + abono;

console.log("Seu novo salário é: " + 
        new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(novoSalario));