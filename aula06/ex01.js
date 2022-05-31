//Faça um Programa que leia 20 números inteiros e armazene-os num array. Armazene os números pares no array PAR e os números IMPARES no array IMPAR. Imprima os três vetores.
const prompt = require("prompt-sync")();
const impar = [];
const par = [];
const lista = [];
let num = 0;
for (i = 0; i < 20; i++) {
  num = +prompt("Digite um número: ");
  lista.push(num);
  if (num % 2 == 0) {
    par.push(num);
  } else {
    impar.push(num);
  }
}
