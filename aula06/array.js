console.clear();
const lista = [];
lista[0] = [1, 2, 3, 4, 5, 6, 7, 43, 2432, 124];
lista[1] = [7, 8, 9, 10, 11, 12, 321, 3123, 123, 12312];

// Criado a matriz names, e dentro dela criamos um dicionário ou objetos, dentro desses objetos temos os atributos, exemplo:
//{ nome: "Bruno", idade: 30 },todo o conjunto é um objeto, porém, cada item dentro do objeto se chama atributo.

const names = [
  { nome: "Bruno", idade: 30 },
  { nome: "Maria", idade: 27 },
];
//Neste for, pessoas está percorrendo cada objeto do array names
// Exemplo: pessoas no index 0 tem como objeto { nome: "Bruno", idade: 30 }, pessoas no index 1 tem como objeto: { nome: "Maria", idade: 27 }
//Quando quisermos percorrer o objeto atrás de um atributo em especifíco usamos names[pessoas].(atributo que desejamos)
names.push = { nome: "João", idade: 22 };
for (pessoas in names) {
  console.log(
    `O nome: ${names[pessoas].nome} e a idade é: ${names[pessoas].idade}`
  );
}

//Criando uma matriz:
//Aqui o for já vai percorre toda a lista, index por index.
// for (i = 0; i < lista.length; i++) {
//   for (j = 0; j < lista[i].length; j++) {
//     console.log(`Na posição ${i} x ${j} = ${lista[i][j]}`);
//   }
// }
// for (postion in lista) {
//Irá percorre o array, inserindo o valor de cada posição dentro do postion
//Exemplo: position 0 =  a todos os valores da lista[0], ou seja, na posição 0 position vale todos os valores de lista[0] e assim sucessivamente.
//   console.log(`O valor: ${lista[postion]} está na posição: ${postion}`);
// }

// for (number of lista) {
//   // Irá percorrer todo array, porém, não ira retornar a posição, somente os valores.
//   console.log("O valor é: " + number);
// }

lista.forEach(function (valor, position) {
  console.log(`O valor ${valor} está na posição ${position}`);
});

console.log(lista.length);


