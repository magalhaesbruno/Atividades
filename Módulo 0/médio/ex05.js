const prompt = require("prompt-sync")();
console.clear();
let salario = +prompt("Digite o salário: ");
let aumento = 0;
let atual = 0;
if (salario <= 280) {
  aumento = salario * 0.2;
  atual = salario + aumento;
  console.log(`O salário anterior era R$:${salario}`);
  console.log(`Foi realizado um ajuste de 20%`);
  console.log(`O reajuste foi de R$${aumento.toFixed(2)}`);
  console.log(`Seu novo salário é: R$${atual}`);
} else if (salario > 280 && salario < 700) {
  aumento = salario * 0.15;
  atual = salario + aumento;
  console.log(`O salário anterior era R$:${salario}`);
  console.log(`Foi realizado um ajuste de 15%`);
  console.log(`O reajuste foi de R$${aumento.toFixed(2)}`);
  console.log(`Seu novo salário é: R$${atual}`);
} else if (salario >= 700 && salario < 1500) {
  aumento = salario * 0.1;
  atual = salario + aumento;
  console.log(`O salário anterior era R$:${salario}`);
  console.log(`Foi realizado um ajuste de 10%`);
  console.log(`O reajuste foi de R$${aumento.toFixed(2)}`);
  console.log(`Seu novo salário é: R$${atual}`);
} else if (salario >= 1500) {
  aumento = salario * 0.05;
  atual = salario + aumento;
  console.log(`O salário anterior era R$:${salario}`);
  console.log(`Foi realizado um ajuste de 5%`);
  console.log(`O reajuste foi de R$${aumento.toFixed(2)}`);
  console.log(`Seu novo salário é: R$${atual}`);
}
