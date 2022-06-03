// Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.
const prompt = require("prompt-sync")();
let num = +prompt("Insira o número: ");
for (i = 0; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}
