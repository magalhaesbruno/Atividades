const valores = {};
for (i = 0; i < 100; i++) {
  dado = Math.floor(Math.random() * 6 + 1); // criando um número aleatorio inteiro de 1 a 6, se desejar alterar o range, só aumentar o "6"
  valores[i] = dado;
}
let dado1 = 0;
let dado2 = 0;
let dado3 = 0;
let dado4 = 0;
let dado5 = 0;
let dado6 = 0;
for (j = 0; j < 100; j++) {
  // if (valores[j] == 1) {
  //   dado1 += 1;
  switch (valores[j]) {
    case 1:
      dado1 += 1;
      break;
    case 2:
      dado2 += 1;
      break;
    case 3:
      dado3 += 1;
      break;
    case 4:
      dado4 += 1;
      break;
    case 5:
      dado5 += 1;
      break;
    case 6:
      dado6 += 1;
      break;
  }
}

console.log(valores[0]);
console.log(`O número 1, saiu: ${dado1} vezes`);
console.log(`O número 2, saiu: ${dado2} vezes`);
console.log(`O número 3, saiu: ${dado3} vezes`);
console.log(`O número 4, saiu: ${dado4} vezes`);
console.log(`O número 5, saiu: ${dado5} vezes`);
console.log(`O número 6, saiu: ${dado6} vezes`);
