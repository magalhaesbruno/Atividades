// Peça ao usuário uma quantidade de linhas e e outra de colunas, e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
// [ 0, 1, 2, 3 ]
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4, 5 ]

const prompt = require("prompt-sync")();
let linha = +prompt("Digite a quantide de linhas");
let coluna = +prompt("Digite a quantidade de colunas.");
for (i = 0; i < linha; i++) {
  // Primeiro For, para criação de cada novo array após cada execução
  const array = []; // declaração do array
  for (j = i; j < coluna + i; j++) {
    // criação do for para inserir os elementos dentro do array.
    array.push(j); // inseração dos elementos do array
  }
  console.log(array);
}

//No segundo for, a sua execução funciona da seguinte maneira.
// j = i ou seja o J vai se iniciliazar no mesmo valor do número de linha para que seja crescente a inserção dos elementos como no exemplo no inicio.
// no j < colunas + i => Pelo fato do J começar no mesmo valor do I, a sua quantidade de colunas vai reduzindo a cada execução, com isso é necessário
// inserir a soma do +i para que seja "inserido" o número de colunas perdidos.
