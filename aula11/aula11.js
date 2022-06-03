const prompt = require("prompt-sync")();

// //Declaração - exemplo com prompt
// function saudacao() {
//   const nome = prompt("Digite seu nome: ");
//   console.log(`Olá ${nome}`);
//   console.log("Seja Bem-vindo!");
// }
// //Execução da função
// saudacao();

// Na declaraçãop da função, temos os paramêtros. (nome)
function saudacao(nome) {
  console.log(`Olá ${nome}`);
  console.log("Seja Bem-vindo!");
}
const nome1 = prompt("Digite seu nome: ");
const nome2 = "Bruno";
//Execução da função, temos os argumentos, sendo 1 argumento para cada parâmetro.
saudacao(nome1);
saudacao(nome1);

// //Declaração da função
// function soma() {
//   return 1 + 2;
// }

// //Execução
// const executar = soma();
// console.log({ executar });

//Função com paramêtros e com retorno.
function somar(numero1, numero2) {
  return numero1 + numero2;
}
//Execução
const numeroDigitado1 = +prompt("Digite o 1° número");
const numeroDigitado2 = +prompt("Digite o 1° número");
const executar = somar(numeroDigitado1, numeroDigitado2);
console.log({ executar });

//Arrow Function
const somarArrow = (a, b) => {
  return a + b;
};
// Ou pode ser declarada assim:
//const somarArrow = (a, b) => a + b;

const resultadoArrow = somarArrow(1, 2);
console.log(resultadoArrow);

//ForEach
// O array números, tem como prototype objeto, logo ele pode acessar funções.
//numeros.forEach(Item, Index do Item, e Array completo)

const numeros = [
  { nome: "Bruno", idade: 27 },
  { nome: "Pedro", idade: 22 },
];
const percorrer = (item, index) => {
  console.log(
    `O seu nome é: ${item.nome} e a sua idade é: ${item.idade} e está cadastrado no index: ${index}`
  );

  return;
};
//Dentro do ForEach usamos uma função, neste caso, usamos uma função anmônima (a,b,c) =>{}
// A estrtura também pode ser utilizada diretamente com um Array.
numeros.forEach((a, b, c) => {
  console.log(a, b, c);
});

//Também pode ser feito assim, caso tenha somente uma condição.
numeros.forEach((a, b, c) => console.log(a, b, c));
