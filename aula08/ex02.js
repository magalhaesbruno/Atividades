//Escreva um programa que peça um número e escreva o fatorial dele. Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720
const prompt = require("prompt-sync")();
let numero = +prompt("Digite o número que deseja saber o fatorial");
let cont = 1;
for (i = numero; i > 0; i--) {
  cont *= i;
}
console.log(cont);
