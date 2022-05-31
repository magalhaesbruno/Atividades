//For indexado

const nomes = ["Bruno", "Pedro", "Maria", "Ana", "João "];

for (let i = 0; i < nomes.lenght; i++) {
  // 1° criação da variável: let i = 0. 2° condição: i < 3 (enquanto verdadeiro). 3° Incremento i++
  console.log;
}
for (let i = nomes.length - 1; i > 0; i--) {
  const nome = nomes[i];
  console.log(nome);
}

// For of servirá pora quando queremos apenas o valor de cada item do array.
//Problema: não funciona para valores duplicados dentro do array.

for (const nome of nomes) {
  const i = nomes.indexOf(nome);
  console.log(nome, i);
}
//For in servirá para quando queremos apenas o índice de cada item do array.
//Funciona muito bem tanto para obtenção de índice quanto de valores de um array.
for (const i in nomes) {
  console.log(nomes[i]);
}

nomes.reverse();
for (const nome of nomes) {
  console.log(nome);
}
