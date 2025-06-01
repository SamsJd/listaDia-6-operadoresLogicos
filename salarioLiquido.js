const leia = require('readline-sync');

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;
let salarioLiquido

salarioBruto = leia.questionFloat('Digite o Salário Bruto: ');
adicionalNoturno = leia.questionFloat('Digite o Adicional Noturno: ');
horasExtras = leia.questionFloat('Digite as Horas Extras: ');
descontos = leia.questionFloat('Digite os Descontos: ');


    salarioLiquido = (salarioBruto + adicionalNoturno + (horasExtras * 5)) - descontos;

console.log("\nO Salário Líquido é: " + 
        new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(salarioLiquido));
console.log("\n")